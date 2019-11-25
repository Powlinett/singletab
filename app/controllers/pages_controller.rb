class PagesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:auth, :check_auth]
  skip_before_action :authenticate_user!
  acts_as_token_authentication_handler_for User, except: [:auth, :check_auth]

  def visualisation
  end

  def data
    condition = params[:id].nil? ? " " : " AND folders.id = #{params[:id]}"
    @folders = Folder.where("folders.user_id = #{current_user.id} #{condition}")


    render json: mind_map()

    folders.each do |f|
      arrayfolder = {
        "name": "#{f.name}",
        "id": "#{f.id}",
        "children": ""
      }
      f.tabs.all.each do |t|
        tabsfolder << {
          "name": t.name,
          "id": t.id,
          "size": 1,
          "url": t.url,
          "title": t.title,
          "favicon": t.icon
        }
      end
      arrayfolder[:children] = tabsfolder
      tabsfolder = []
      allfolder << arrayfolder
    end

    render json: {
      "name": "My map",
      "children": [{
        "name": "My search",
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

  # /test code enzo by jojo
   def superparent()
      childrens = []
      @folders.each do |item|
        if item.parent_id.nil?
          hash = { name: item.name, id: item.id }
          hash[:size] = 3
          hash[:children] = show_child(item.id)
          childrens << hash
        end
      end
        childrens
    end

   def show_child(folder_id)
      childrens = []
      @folders.each do |item|
        if item.parent_id = folder_id
          hash = { name: item.name, id: item.id }
          hash[:size] = 3
          hash[:children] = alltabs(item.id)
          childrens << hash
        end
      end
        childrens
    end

    def alltabs(folder_id)
      childrens = []
      @folders.each do |item|
        if item..tabs.all.each do |t|
          tabsfolder << {
            "name": t.name,
            "id": t.id,
            "size": 1,
            "url": t.url,
            "title": t.title,
            "favicon": t.icon
          }
        end
      end
        childrens
    end

    def mind_map()
      arrayfolder = []
      arrayfolder = Folder.search_folder_by_id(current_user.id)
      map = {
        name: "My map",
        children: superparent()
      }
      map.to_json
    end
end
