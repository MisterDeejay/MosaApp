window.Mosa.Collections.RestaurantComments = Backbone.Collection.extend({
	model: Mosa.Models.Comment,
	url: function() {
		// return "/api/retaurants/" + this.restaurant.id + "/comments"; 
		return this.restaurant.url() + "/comments";
	},
	
	initialize: function(models, options) {
		this.restaurant = options.restaurant;
	}
})

// use listenTo(this.collection, "add", this.render) to sync comments when a new comment is added to the collection on the server side