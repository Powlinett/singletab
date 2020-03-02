class MapController < ApplicationController
  def visualisation
  end

  def data
    if params[:folder_id].nil?
      render json: folders_json
    else
      render json: folder_json(params[:folder_id])
    end
  end

  private

  def folder_json(folder_id)
    folder = Folder.find(folder_id)
    folder_hash = {
      name: folder.name,
      # id: folder.id,
      # parent_id: folder.parent.id,
      # type: 'Folder',
      children: alltabs(folder)
    }
    folder_hash.to_json
  end

  def folders_json
    root_folder = current_user.folders.first
    folders_hash = {
      name: root_folder.name,
      # id: root_folder.id,
      favicon: 'http://imageshack.com/a/img924/7323/nbroSO.png',
      children: sub_folders
    }
    folders_hash.to_json
  end

  def alltabs(folder)
    alltabs = []
    folder.tabs.each do |tab|
      tab.icon = tab.icon.nil? ? 'http://imageshack.com/a/img924/7323/nbroSO.png' : tab.icon
      alltabs << {
        name: tab.title,
        # id: tab.id,
        size: 4000,
        url: tab.url,
        title: tab.title,
        favicon: tab.icon
      }
    end
    alltabs
  end

  def sub_folders
    sub_folders = []
    root_folder = current_user.folders.first
    @folders = current_user.folders.where.not(name: 'My researches')
    @folders.each do |folder|
      if folder.parent == root_folder
        hash = { name: folder.name,
                 # id: folder.id,
                 # parent_id: root_folder.id,
                 children: alltabs(folder) }  # []
        # if folder.folders
        #   folder.folders.each do |sub_folder|
        #     hash[:children] << add_subfolders(sub_folder)
        #   end
        # end
        sub_folders << hash
      end
    end
    sub_folders
  end

  # def add_subfolders(folder)
  #   folder_hash = { name: folder.name,
  #                   id: folder.id,
  #                   type: 'Folder',
  #                   children: alltabs(folder) }
  #   sub_folders = []
  #   folder.folders.exists?
  #     folder.folders.each do |sub_folder|
  #       sub_folders << sub_folder
  #     end
  #   sub_folders
  # end
end
