class QuoteSerializer < ActiveModel::Serializer
  attributes :id, :text

  belongs_to :book
end
