class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  acts_as_token_authenticatable

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable
  has_many :folders
  has_many :tabs, through: :folders
  has_many :blacklisted_sites

  after_create :create_root_folder

  private

  def create_root_folder
    root_folder = Folder.new(
      name: 'My researches',
      user: self
    )
    root_folder.save!
  end
end
