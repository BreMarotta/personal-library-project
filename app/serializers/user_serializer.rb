class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :category_list, :book_list

  def category_list
    list = self.object.categories.uniq
    list.sort_by{ |h| h[:name]}
  end

  def book_list
    list = self.object.books
    list.sort_by{ |b| b[:title]}
  end
  
end
