class BlacklistedSite < ApplicationRecord
  belongs_to :user
  validates :domain_name, presence: true
end
