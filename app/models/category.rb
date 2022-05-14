class Category < ApplicationRecord
    has_many :books
    # has_many :users, through: :books

    def self.sort_order 
        self.order("name": :asc)
    end
end
