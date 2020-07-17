class AddDescriptionToEvent < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :description, :text
  end
end
