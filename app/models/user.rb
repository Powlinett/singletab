class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  acts_as_token_authenticatable

  devise :database_authenticatable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :folders
end
