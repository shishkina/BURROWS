class CreatePost < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.string :content
      t.string :title
      t.integer :user_id

      t.timestamps
    end
  end
end
