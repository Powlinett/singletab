class Folder < ApplicationRecord
  belongs_to :user
  belongs_to :parent, class_name: 'Folder', optional: true
  has_many :folders, foreign_key: :parent_id
  has_many :tabs
end
