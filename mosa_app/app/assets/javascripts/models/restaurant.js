window.Mosa.Models.Restaurant = Backbone.Model.extend({
	urlRoot: "api/restaurants",

	reviews: function() {
		this._reviews = this._reviews ||
			new Mosa.Collections.RestaurantReviews([], { restaurant: this });
		return this._reviews;
	},

	display_address: function() {
		var rawAddressArr = this.attributes.display_address.slice(2, -2)
			.split(",");

		rawAddressArr = rawAddressArr.map(function(el) {
			var myRe = /[\w]+.+[^"]/;
			var myReArr = myRe.exec(el);

			return myReArr[0];
		});

		return rawAddressArr.join(", ");
	},

	parse: function(response) {
		if(response.reviews) {
			this.reviews().set(response.reviews, { parse: true });
		}

		return response;
	},

	distance: function(){
		if(window.latLng) {
			currLoc = new google.maps.LatLng(window.latLng[0],
				window.latLng[1]);
			restLoc = new google.maps.LatLng(this.get("lat"),
				this.get("lng"));


			dist = google.maps.geometry.spherical.computeDistanceBetween(
				currLoc, restLoc
			);

			return dist;
		} else {
			return 0;
		}
	},
})
