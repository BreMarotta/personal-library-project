class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :user_total


  def user_total
    self.object.users.size
  end

  # def user_total
  #   # byebug
  #   self.object.totals
  # end
end
