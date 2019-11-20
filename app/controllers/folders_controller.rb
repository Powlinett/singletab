class FoldersController < ApplicationController
  skip_before_action :authenticate_user!
  before_action :set_folder, only: :show


  def index
    @folders = Folder.all
  end

  def new
    @folders = Folder.new
  end

  def create
    @folders = Folder.new
  end


  def search
    @folders = Folder.search_all(params[:query])
  end

  # def show

  # end

  # def edit
  # end

  def show
  end


  private

  def set_folder
    @folder = Folder.find(params[:id])
  end
end
