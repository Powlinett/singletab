class CreateFolders < ActiveRecord::Migration[5.2]
  def change
    create_table :folders do |t|
      t.string :name
      t.integer :weight
      t.references :user, foreign_key: true
      t.integer :parent_id, index: true

      t.timestamps
    end
  end
end
