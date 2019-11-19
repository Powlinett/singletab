class FoldersController < ApplicationController
  skip_before_action :authenticate_user!
  before_action :set_folder, only: :show

  def index
    @folders = Folder.all
  end

  def show
  end

  private

  def set_folder
    @folder = Folder.find(params[:id])
  end
end
