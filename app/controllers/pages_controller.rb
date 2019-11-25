class PagesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:auth, :check_auth]
  skip_before_action :authenticate_user!
  acts_as_token_authentication_handler_for User, except: [:auth, :check_auth]

  def visualisation
  end

  def data
    # Folder.all
    # http://api.myjson.com/bins/1f30qe
    # puis render.json(#)
    folders = Folder.search_folder_by_id(current_user.id)
    allfolder = []
    arrayfolder = {}
    tabsfolder = []

    folders.each do |f|
      arrayfolder = {
        "name": "#{f.name}",
        "children": ""
      }
      f.tabs.all.each do |t|
        tabsfolder << {
          "name": "#{t.name}",
          "size": 1,
          "url": "#{t.url}",
          "favicon": "#{t.icon}"
        }
      end
      arrayfolder[:children] = tabsfolder
      tabsfolder = []
      allfolder << arrayfolder
    end

    render json: {
      "name": "variants",
      "children": [{
        "name": "Mes recherches",
        "size": 3,
        "children": allfolder
      }]
    }
  end

  def auth
  	user = User.where("email = ?", params["email"]).first

    if user.valid_password?(params["password"])
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
      render json: { statut: 'Need to login'}
    end
  end
end
