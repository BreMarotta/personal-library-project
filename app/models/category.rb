class Category < ApplicationRecord
    has_many :books
    has_many :users, through: :books
    
    validates :name, uniqueness: { case_sensitive: false }

    def self.sort_order 
        self.order("name": :asc)
    end

    def self.totals        
        categories = Category.left_outer_joins(:users).distinct.select('categories.*,COUNT(users.*) AS users_count').group('users_count')
    end


end
