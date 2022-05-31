class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :user_total

  def user_total
    # byebug
    self.object.users.size
  end
end
