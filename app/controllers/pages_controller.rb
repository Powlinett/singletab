class PagesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:auth, :check_auth]
  skip_before_action :authenticate_user!
  acts_as_token_authentication_handler_for User, except: [:auth, :check_auth]

  def visualisation
  end

  def data
    condition = params[:id].nil? ? " " : " AND folders.id = #{params[:id]}"
    folders = Folder.where("folders.user_id = #{current_user.id} #{condition}")
    allfolder = []
    arrayfolder = {}
    tabsfolder = []

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
   def show_child(arrayfolder)
      childrens = []
      arrayfolder.each do |item|
        if !done.include?(item.name)
          hash = { name: item.name, rank: item.rank, card_nb: item.tabs.count }
          hash[:size] = item.tabs.count if item.tabs.count == 0
          hash[:children] = show_child(item.childs)
          done << item.name
          childrens << hash
        end
      end
        childrens
    end

    def mind_map()
      arrayfolder = []
      arrayfolder = Folder.search_folder_by_id(current_user.id)
      map4 = {
        name: @arrayfolder.name,
        rank: 0,
        children: show_child(arrayfolder)
      }
      map4.to_json
    end
end
