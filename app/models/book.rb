class Book < ApplicationRecord
    belongs_to :user
    has_many :additional_quotes, dependent: :destroy

    validates :title, presence: true
    validates :personal_rating, numericality: {less_than_or_equal_to: 5 }

    def self.sort_order 
        self.order("title": :asc)
    end
end
