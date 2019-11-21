class PagesController < ApplicationController
  skip_before_action :authenticate_user!

  def visualisation
  end

  def data

    # Folder.all
    # http://api.myjson.com/bins/1f30qe
    # puis render.json(#)
     folders = Folder.search_folder_by_id(current_user.id)
     allfolder = []
     arrayfolder = {}
     tabsfolder = []

     folders.each do |f|
         arrayfolder = {"name":"#{f.name}","children":""}
           f.tabs.all.each do |t|
             tabsfolder << {"name":"#{t.name}","size":1}
           end
          arrayfolder[:children] = tabsfolder
          tabsfolder = []
          allfolder << arrayfolder
      end


    render json: {
      "name":"variants","children":[
        {"name":"Mes recherches","size":3,"children":allfolder}
      ]
    }


  end
end
