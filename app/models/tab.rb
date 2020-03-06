class Tab < ApplicationRecord
  include PgSearch::Model
  pg_search_scope :search_in_description,
                  against: :description

  belongs_to :folder

  validates :url, presence: true, uniqueness: { scope: :folder }
end
