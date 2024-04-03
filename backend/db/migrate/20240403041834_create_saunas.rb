class CreateSaunas < ActiveRecord::Migration[7.0]
  def change
    create_table :saunas do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :image
      t.string :url

      t.timestamps
    end
  end
end
