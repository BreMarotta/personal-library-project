class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :category_list, :book_list

  # has_many :books, serializer: BookIndexSerializer
  # has_many :categories, through: :books

  def category_list
    list = self.object.categories.uniq
    list.sort_by{ |h| h[:name]}
  end

  def book_list
    list = self.object.books
    list.sort_by{ |h| h[:name]}
  end
  
end