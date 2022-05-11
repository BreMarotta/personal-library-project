class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :favorite_quote, :personal_rating, :lent_to, :additional_quotes

  has_many :additional_quotes
end
