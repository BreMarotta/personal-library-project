class BookIndexSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :rating, :category

end
