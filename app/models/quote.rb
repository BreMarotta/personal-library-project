class Quote < ApplicationRecord
    belongs_to :book
    scope :top_three, ->{self.order("LENGTH(quotes.text) desc").limit(3)}

end
