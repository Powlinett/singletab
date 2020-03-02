class CreateBlacklistedSites < ActiveRecord::Migration[5.2]
  def change
    create_table :blacklisted_sites do |t|
      t.string :domain_name
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
