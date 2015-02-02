json.(restaurant, :id, :display_name, :created_at, :updated_at)

reviews ||= nil
unless reviews.nil?
	json.reviews(reviews) do |rvw|
		json.partial!("reviews/review", review: rvw)
	end
end