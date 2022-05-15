class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :books

  private
  def book_order
    books.order("title": :asc)
end
end
