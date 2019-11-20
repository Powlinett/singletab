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
      name: "JEAN MICHEL",
      weight: 1
      )
    if @folder.save!
      bob = JSON.parse(params[:variable])
      bob.each do |tab|
      @tab = Tab.new(
      name: "first",
      url: tab["url"],
      title: tab["title"],
      icon: tab["icon"],
      description: "",
      comment: "",
      folder_id: @folder.id
      )
      @tab.save!
    end
      redirect_to folders_path
      # if @tab.save!
      #   redirect_to folders_path
      # else
      #   redirect_to tabs_path
      # end
    end
  end
end
