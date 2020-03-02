class Tab < ApplicationRecord
  include PgSearch::Model
  pg_search_scope :search_in_description,
                  against: :description

  belongs_to :folder

  validates :url, uniqueness: { scope: :folder_id }
end
