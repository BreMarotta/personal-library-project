class Category < ApplicationRecord
    has_many :books
    
    validates :name, uniqueness: true

    def self.sort_order 
        self.order("name": :asc)
    end

    def book_order
        books.order("title": :asc)
    end
end
