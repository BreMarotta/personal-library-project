class BookIndexSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :rating

belongs_to :category

end
