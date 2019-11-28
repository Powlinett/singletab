class TabsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @tabs = Tab.all
  end

  def new
    @project = Tab.new
  end

  def create
    time = Time.now
    time = time.strftime("%d/%m/%Y %k:%M")
    @folder = Folder.new(
      user_id: current_user.id,
      name: "New search #{time}",
      weight: 1
      )

    if @folder.save!
      arrayparams = JSON.parse(params[:variable])
      arrayparams.each do |tab|

        url = Domainatrix.parse(tab["url"])

        @tab = Tab.new(
          name: url.domain,
          url: tab["url"],
          title: no_accent(tab["title"]),
          icon: tab["icon"],
          description: no_n(tab["body"].join(' ')),
          comment: "",
          folder_id: @folder.id #voir ajout couleur
          )
        @tab.save!
      end
    p "===================================="
    p @folder.tabs.count
    if @folder.tabs.length <= 0
      @folder.destroy
    end
          redirect_to folders_path
  end
end

  def show
    @tab = Tab.find(params[:id])
  end

  def destroy
   @tab = Tab.find(params[:id])
   @tab.delete
   redirect_to folders_path
 end

 private
 def no_accent(texte)
  CGI.escape(texte).gsub('+',' ').gsub("\\n",' ').gsub('%E9','e').gsub('%27',' ').gsub('%FB','u').gsub('%2B','+').gsub('%28','(').gsub('%3B',';').gsub('%0D%0A','').gsub('%2C',',').gsub('%85','...').gsub('%29',')').gsub('%EA','e').gsub('%26','et').gsub('%3A',':').gsub('%E2','a').gsub('%E0','a').gsub('%22','').gsub('%8C','OE').gsub('%B0','um ').gsub('%E8','e')
end
 def no_n(texte)
    texte.gsub("\n",' ')
 end
end
