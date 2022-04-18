class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.integer :personal_rating
      t.string :favorite_quote
      t.string :lent_to
      t.integer :user_id

      t.timestamps
    end
  end
end
