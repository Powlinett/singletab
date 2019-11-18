class CreateTabs < ActiveRecord::Migration[5.2]
  def change
    create_table :tabs do |t|
      t.string :name
      t.string :url
      t.string :title
      t.string :icon
      t.text :description
      t.text :comment
      t.references :folder, foreign_key: true

      t.timestamps
    end
  end
end
