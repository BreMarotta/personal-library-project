class CreateAdditionalQuotes < ActiveRecord::Migration[6.1]
  def change
    create_table :additional_quotes do |t|
      t.integer :book_id
      t.string :quote

      t.timestamps
    end
  end
end
