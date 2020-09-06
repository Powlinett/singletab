class TabsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index_by_date
    @tabs = current_user.tabs.order(created_at: :desc)
    render :index_by_date
  end

  def create
    assigned_folder = assign_folder_to_tabs(params[:folder])

    arrayparams = JSON.parse(params[:variable])
    arrayparams.each do |tab|
      textebody = tab['body'].nil? ? '' : no_n(tab['body'].join(' '))

      @tab = Tab.new(
        name: Domainatrix.parse(tab['url']).domain,
        url: tab['url'],
        title: tab['title'],
        icon: tab['icon'],
        description: textebody,
        comment: '',
        folder_id: assigned_folder.id
      )
      @tab.save
    end
    redirect_to folders_path
  end

  def destroy
    @tab = Tab.find(params[:id])
    @tab.destroy
  end

  private

  def no_n(texte)
    texte.gsub("\n",' ')
  end

  def assign_folder_to_tabs(folder) #regarder pour le mettre dans un "service"
    if folder == 'new-research'
      time = Time.now
      time = time.strftime('%d/%m/%Y %k:%M')
      @folder = Folder.new(
        user: current_user,
        name: "New search #{time}",
        weight: 1,
        parent: current_user.folders.first
      )
      @folder.save
    else
      @folder = Folder.find(folder)
    end
    @folder
  end
end
