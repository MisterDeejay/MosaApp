json.array! @restaurants do |r|
  json.merge! r.attributes

  json.review do
    json.id r.reviews.first.id
    json.body r.reviews.first.body
    json.user_id r.reviews.first.user_id
    json.rating r.reviews.first.rating
    json.created_at r.reviews.first.created_at
    json.updated_at r.reviews.first.updated_at
  end
end
