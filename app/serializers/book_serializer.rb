class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :favorite_quote, :personal_rating
end
