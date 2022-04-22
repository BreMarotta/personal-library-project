class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :favorite_quote, :personal_rating

  has_many :additional_quotes
end
