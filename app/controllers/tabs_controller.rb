class TabsController < ApplicationController


  def index
    @tabs = Tab.all
  end

  def new
    @project = Tab.new
  end
 def create
  @onglet = Onglet.new(
    name: `Search #{Times.new}`,
    weight: 1,
    user_id: current_user
    )
  if @onglet.save
    @tab = Tab.new(
    name: tab.title,
    url: tab.url,
    title: tab.title,
    icon: tab.favIconUrl,
    description: "",
    comment: "",
    folder_id: @onglet.id
    )
  else
    format.html { render :index }
  end
  end
end
