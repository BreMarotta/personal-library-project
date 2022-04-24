class AdditionalQuoteSerializer < ActiveModel::Serializer
  attributes :id, :quote

  belongs_to :book
end
