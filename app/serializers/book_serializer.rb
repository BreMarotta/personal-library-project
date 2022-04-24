class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :favorite_quote, :personal_rating, :additional_quotes

  has_many :additional_quotes
end
