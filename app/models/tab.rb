class Tab < ApplicationRecord
  belongs_to :folder

  validates :url, uniqueness: { scope: :folder_id }
end
