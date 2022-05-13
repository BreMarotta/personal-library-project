class UpdateQuotesTable < ActiveRecord::Migration[6.1]
  def change
    change_table :quotes do |t|
      t.rename :quote, :text
      t.boolean :love
    end
  end
end
