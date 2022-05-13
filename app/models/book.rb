class Book < ApplicationRecord
    belongs_to :user
    belongs_to :category
    has_many :quotes, dependent: :destroy

    validates :title, presence: true
    validates :rating, numericality: {less_than_or_equal_to: 5 }

    def self.sort_order 
        self.order("title": :asc)
    end
end
