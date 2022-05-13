class AddDefaultKey < ActiveRecord::Migration[6.1]
  def change
    change_column :books, :category_id, :integer, default: 1
  end
end
