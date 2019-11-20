class Folder < ApplicationRecord
  belongs_to :user
  belongs_to :parent, class_name: 'Folder', optional: true
  has_many :folders, foreign_key: :parent_id
  has_many :tabs

  include PgSearch::Model
  pg_search_scope :search_all,
    associated_against: {
      tabs: [ :name, :url, :title, :description, :comment],
    },
    using: {
      tsearch: { prefix: true } # <-- now `superman batm` will return something!
    }
  pg_search_scope :search_folder_by_id,
    against: [:id],
    using: {
      tsearch: { prefix: true } # <-- now `superman batm` will return something!
    }
end
