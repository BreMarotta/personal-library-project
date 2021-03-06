class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :favorite_quote, :rating, :lent, :category_id

  belongs_to :category
  belongs_to :user
  has_many :quotes
end
