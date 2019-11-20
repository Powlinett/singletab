class FoldersController < ApplicationController
  skip_before_action :authenticate_user!
  before_action :set_folder, only: :show
  include PgSearch::Model
  pg_search_scope :search_all,
    associated_against: {
      tabs: [ :name, :url, :title, :description, :comment],
    },
    using: {
      tsearch: { prefix: true } # <-- now `superman batm` will return something!
    }

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
    Folder.search_all(params[:search])
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
