class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :category_list, :book_list
  # has_many :books
  # has_many :categories, through: :books

  def category_list
    # byebug
    list = self.object.categories.uniq.sort_by{ |h| h[:name]}
  end

  def book_list
    list = self.object.books.sort_by{ |b| b[:title]}  
  end
  # excluding(:created_at, :updated_at, :favorite_quote, :lent)
end
