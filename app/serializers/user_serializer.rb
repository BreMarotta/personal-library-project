class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :category_list
  has_many :books
  # has_many :categories, through: :books

  def category_list
    list = self.object.categories.uniq.sort_by{ |h| h[:name]}
  end

  def book_list
    list = self.object.books.sort_by{ |b| b[:title]}  
  end
end
