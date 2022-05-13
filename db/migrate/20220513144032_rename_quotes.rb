class RenameQuotes < ActiveRecord::Migration[6.1]
  def change
    rename_table('additional_quotes', 'quotes')
  end
end
