class User < ApplicationRecord
    has_secure_password

    has_many :books, dependent: :destroy
    has_many :quotes, through: :books
    has_many :categories, through: :books

    validates :username, :password, :password_confirmation,  presence: true
    validates :username, uniqueness: true

    def self.most_books
        self.all.max_by  do |u|  
            u.books.length
        end
    end

    def category_list
        list = categories.uniq
        list.sort_by{ |h| h[:name]}
    end

    # order("title": :asc)
end
