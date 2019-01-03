class CreateAppearances < ActiveRecord::Migration[5.0]
  def change
    create_table :appearances do |t|
      t.belongs_to :character, foreign_key: true
      t.belongs_to :story, foreign_key: true
      t.boolean :is_good

      t.timestamps
    end
  end
end
