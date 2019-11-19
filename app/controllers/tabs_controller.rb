class TabsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
    @tabs = Tab.all
  end

  def new
    @project = Tab.new
  end

  def create
    @folder = Folder.new(
      user_id: current_user.id,
      name: `Search now`,
      weight: 1
      )
    if @folder.save!

      @tab = Tab.new(
      name: "first",
      url: "www.roro.com",
      title: "tab.title",
      icon: "tab.favIconUrl",
      description: "",
      comment: "",
      folder_id: @folder.id
      )

      if @tab.save!
        redirect_to folders_path
      else
        redirect_to tabs_path
      end
    end
  end
end
