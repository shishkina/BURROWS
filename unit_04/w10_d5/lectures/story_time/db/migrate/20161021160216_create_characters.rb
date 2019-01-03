class CreateCharacters < ActiveRecord::Migration[5.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :bio
      t.string :motive

      t.timestamps
    end
  end
end
