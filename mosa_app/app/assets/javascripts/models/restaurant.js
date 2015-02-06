window.Mosa.Models.Restaurant = Backbone.Model.extend({
	urlRoot: "api/restaurants",
	// name:
	// image_url
	// display_phone
	// review_count
	// distance
	// snippet_text
	// location.display_address
	// location.cross_streets
	// location.neighborhoods
	// reviews
	// bottomless-hrs
	// bottomless-days
	// bottomless-price
	//
	// reviews.excerpt // going to want to regex thru the excerpt for the phrase "bottomless mimosa*" store those excerpts in bottomless excerpts, then i want to regex thru bottomless excerpts for
	//
	// reviews: function() {
	// 	if (!this._reviews) {
	// 		this._reviews = new Mosa.Collections.RestaurantReviews([], {
	// 			restaurant: this.model
	// 		});
	// 	}
	//
	// 	return this._reviews;
	// },
	//
	// parse: function(jsonResp) {
	// 	if (jsonResp.reviews) {
	// 		this.review().set(jsonResp.reviews);
	// 		delete jsonResp.review;
	// 	}
	//
	// 	return jsonResp;
	// }
})
