class TabsController < ApplicationController
  include PgSearch::Model
  skip_before_action :verify_authenticity_token
  require 'time'
  require 'domainatrix'

  def index
    @tabs = Tab.all
  end

  def new
    @project = Tab.new
  end

  def create
    @folder = Folder.new(
      user_id: current_user.id,
      name: "MA recherche #{Time.now}",
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
      description: tab["body"],
      comment: "",
      folder_id: @folder.id #voir ajout couleur
      )
      @tab.save!
    end
      redirect_to folders_path
    end
  end

  def destroy
    redirect_to folders_path
  end

private
  def no_accent(texte)
    CGI.escape(texte).gsub('+',' ').gsub('%E9','e').gsub('%27',' ').gsub('%FB','u').gsub('%2B','+').gsub('%28','(').gsub('%3B',';').gsub('%0D%0A','').gsub('%2C',',').gsub('%85','...').gsub('%29',')').gsub('%EA','e').gsub('%26','et').gsub('%3A',':').gsub('%E2','a').gsub('%E0','a').gsub('%22','').gsub('%8C','OE').gsub('%B0','um ').gsub('%E8','e')
  end

end
