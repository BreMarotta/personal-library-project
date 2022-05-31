class User < ApplicationRecord
    has_secure_password

    has_many :books, dependent: :destroy
    has_many :quotes, through: :books
    has_many :categories, through: :books

    validates :username, :password, :password_confirmation,  presence: true
    validates :username, uniqueness: { case_sensitive: false }

    # def self.most_books
    #     self.all.max_by  do |u|  
    #         u.books.length
    #     end
    # end

    def self.most_books
        users = User.preload(:books)
        users.max_by do |u|
            u.books.length
        end
    end

    def category_list
        list = categories.uniq
        list.sort_by{ |h| h[:name]}
    end

end
