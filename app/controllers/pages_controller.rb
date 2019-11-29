class PagesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:auth, :check_auth, :landing]
  skip_before_action :authenticate_user!
  acts_as_token_authentication_handler_for User, except: [:auth, :check_auth, :landing]

  def landing
    @disable_nav = true
  end

  def visualisation
  end

  def visualisationrond
  end

  def data
    condition = params[:id].nil? ? " " : " AND folders.id = #{params[:id]}"
    @folders = Folder.where("folders.user_id = #{current_user.id} #{condition}")

    render json: mind_map()
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

  def signout
    user = User.where('email = ?', params["email"]).first
    sign_out(user)
  end

  # /test code enzo by jojo
  def superparent()
    childrens = []
    @folders.each do |item|
      if item.parent_id.nil?
        hash = { name: item.name, id: item.id, parent_id: item.parent_id, type: "Folder"}
        hash[:children] = alltabs(item)
        if item.folders
          item.folders.each do |item|
            hash[:children] << add_child(item)
          end
        end
        childrens << hash
      end
    end
    childrens
  end

  def add_child(item)
    hash = { name: item.name, id: item.id, type: "Folder"}
    hash[:children] = alltabs(item)
    if item.folders
      item.folders.each do |item|
        hash[:children] << add_child(item)
      end
    end
    hash
  end

  def alltabs(folder)
    childrens = []
    folder.tabs.all.each do |t|
      t.icon = t.icon.nil? ? "http://imageshack.com/a/img924/7323/nbroSO.png" : t.icon
      childrens << {
        name: t.title,
        id: t.id,
        size: 1,
        type: "Tab",
        url: t.url,
        title: t.title,
        favicon: t.icon
      }
    end
    childrens
  end

  def mind_map()
    arrayfolder = []
    arrayfolder = Folder.search_folder_by_id(current_user.id)
    map = {
      name: "My map",
      favicon: "http://imageshack.com/a/img924/7323/nbroSO.png",
      children: superparent()
    }
    map.to_json
  end
end
