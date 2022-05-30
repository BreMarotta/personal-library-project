class Category < ApplicationRecord
    has_many :books
    has_many :users, through: :books
    
    validates :name, uniqueness: { case_sensitive: false }

    def self.sort_order 
        self.order("name": :asc)
    end

    def book_order
        books.order("title": :asc)
    end
end
