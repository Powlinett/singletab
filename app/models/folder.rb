class Folder < ApplicationRecord
  belongs_to :user
  belongs_to :parent, class_name: 'Folder'
  has_many :folders, class_name: 'Folder'
  has_many :tabs
end
