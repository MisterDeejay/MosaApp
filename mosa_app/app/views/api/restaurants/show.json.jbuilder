json.merge! @restaurant.attributes

json.reviews @restaurant.reviews do |review|
  json.extract! review, :id, :body, :user_id, :rating, :created_at, :updated_at
end
