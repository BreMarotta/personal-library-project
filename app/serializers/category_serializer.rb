class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :user_total

  # has_many :books

  def user_total
    self.object.users.size
  end
end
