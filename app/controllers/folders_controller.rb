class FoldersController < ApplicationController
  skip_before_action :authenticate_user!
  before_action :set_folder, only: [:show, :edit, :update, :destroy]

  def index
    #@folders = Folder.where("folders.user_id = #{current_user.id}")

    @folders = Folder.search_folder_by_id(current_user.id) # ActiveRecord
    @tabs = []
    @folders.each do |folder|
      @tabs << folder.tabs
    end
  end

  def new
    @folders = Folder.new
  end

  def create
    @folders = Folder.new(params[:query])
    redirect_to folders_url
  end

  def search
    @folders = Folder.search_all(params[:query])
  end

  def edit
    @parantfolder = Folder.search_folder_by_id(current_user.id)
  end




  def update
    if @folder.update(folder_params())
        redirect_to folders_path
     else
        render :edit
     end
  end

  private

  def set_folder
    @folder = Folder.find(params[:id])
  end
  def folder_params
      params.require(:folder).permit(:name, :weight, :parent_id)
  end


end
