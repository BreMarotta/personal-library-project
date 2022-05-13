class UpdateBookTable < ActiveRecord::Migration[6.1]
  def change
    change_table :books do |t|
      t.rename :personal_rating, :rating
      t.rename :lent_to, :lent 
      t.integer :category_id
    end
  end
end
