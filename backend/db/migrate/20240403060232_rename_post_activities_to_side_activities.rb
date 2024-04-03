class RenamePostActivitiesToSideActivities < ActiveRecord::Migration[7.0]
  def change
    rename_table :post_activities, :side_activities
  end
end
