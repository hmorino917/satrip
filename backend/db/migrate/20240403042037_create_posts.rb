class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.references :user, null: false, foreign_key: true
      t.references :sauna, null: false, foreign_key: true
      t.string :trip_title, null: false
      t.text :trip_content, null: false
      t.text :sauna_content
      t.integer :like_count
      t.integer :visit_order

      t.timestamps
    end
  end
end
