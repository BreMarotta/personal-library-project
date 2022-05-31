class Category < ApplicationRecord
    has_many :books
    has_many :users, through: :books
    
    validates :name, uniqueness: { case_sensitive: false }

    def self.sort_order 
        categories = self.order("name": :asc).includes(:users)
        categories.each do |c|
            c.users.uniq.size 
        end
    end

    # def self.totals        
    #     categories = Category.left_outer_joins(:users).distinct.select('categories.*,COUNT(users.*) AS users_count').group('users_count')
    # end


end
