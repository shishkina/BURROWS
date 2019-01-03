class CreateItem < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string :description
      t.boolean :completed
      t.timestamps
    end
  end
end
