class PostSideActivities < ActiveRecord::Migration[7.0]
  def change
    create_table :post_side_activities do |t|
      t.references :post, null: false, foreign_key: true
      t.references :side_activities, null: false, foreign_key: true
      t.string :activity_content
      t.integer :visit_order

      t.timestamps
    end
  end
end
