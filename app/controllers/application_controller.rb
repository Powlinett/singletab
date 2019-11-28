class ApplicationController < ActionController::Base
  before_action :authenticate_user!  #toutes les pages nécessitent d'être loggé.
  before_action :configure_permitted_parameters, if: :devise_controller?

  acts_as_token_authentication_handler_for User

  def configure_permitted_parameters
    # For additional fields in app/views/devise/registrations/new.html.erb
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username])

    # For additional in app/views/devise/registrations/edit.html.erb
    devise_parameter_sanitizer.permit(:account_update, keys: [:username])
  end

  def default_url_options
  { host: ENV["www.singletab.site"] || "localhost:3000" }
end

end
