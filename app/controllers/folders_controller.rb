class FoldersController < ApplicationController
  # skip_before_action :authenticate_user!
  before_action :set_folder, only: [:show, :destroy, :update]
  before_action :folders_to_display, only: [:index, :send_folders_name]

  def index
    @folders = @folders.sort_by { |folder| folder.tabs.last.id }.reverse
    @tabs = []
    @folders.reverse.each do |folder|
      @tabs << folder.tabs
    end
  end

  def search
    @tabs = current_user.tabs
    @query_tabs = @tabs.search_in_description(params[:query])
    # @query_tabs.uniq! { |tab| tab.url }
  end

  def update
    if @folder.update(folder_params)

      redirect_to folders_path
    else
      render :edit
    end
  end

  def destroy
    @folder.tabs.each(&:destroy)
    @folder.destroy
    redirect_to folders_path
  end

  def send_folders_name
    folders_json = []
    @folders.each do |folder|
      folders_json << {
        name: folder.name.to_s,
        id: folder.id.to_s
      }
    end
    render json: folders_json
  end

  private

  def set_folder
    @folder = Folder.find(params[:id])
  end

  def folder_params
    params.require(:folder).permit(:name, :weight, :parent_id)
  end

  def folders_to_display
    @folders = current_user.folders.where.not(name: 'My researches')
  end
end
