class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :user_total


  def user_total
    self.object.users.uniq.size
  end
end
