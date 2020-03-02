class PagesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:auth, :check_auth, :landing]
  skip_before_action :authenticate_user!
  acts_as_token_authentication_handler_for User, except: [:auth, :check_auth, :landing]

  def landing
    @disable_nav = true
  end

  def auth
    user = User.where('email = ?', params['email']).first

    if user.valid_password?(params['password'])
      sign_in(user)
      render json: { token: user.authentication_token }
    else
      render json: { error: 'failed' }
    end
  end

  def check_auth
    if current_user.present?
      render json: { statut: 'Already logged' }
    else
      render json: { statut: 'Need to login' }
    end
  end

  def signout
    if current_user.present?
      sign_out(current_user)
      render json: { message: 'User logged out' }
    else
      render json: { message: 'No current user' }
    end
  end
end
