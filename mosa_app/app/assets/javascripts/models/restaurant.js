window.Mosa.Models.Restaurant = Backbone.Model.extend({
	urlRoot: "api/restaurants",

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
