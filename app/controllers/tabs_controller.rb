class TabsController < ApplicationController
  skip_before_action :verify_authenticity_token

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
      @tab.save!
    end
  end

  def destroy
    @tab = Tab.find(params[:id])
    @tab.destroy
  end

  private

  # def no_accent(texte)
  #   CGI.escape(texte).gsub('+',' ').gsub("\\n",' ').gsub('%E9','e').gsub('%27',' ').gsub('%FB','u').gsub('%2B','+').gsub('%28','(').gsub('%3B',';').gsub('%0D%0A','').gsub('%2C',',').gsub('%85','...').gsub('%29',')').gsub('%EA','e').gsub('%26','et').gsub('%3A',':').gsub('%E2','a').gsub('%E0','a').gsub('%22','').gsub('%8C','OE').gsub('%B0','um ').gsub('%E8','e')
  # end

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
      @folder.save!
    else
      @folder = Folder.find(folder)
    end
    @folder
  end
end
