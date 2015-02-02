window.Mosa.Collections.Restaurants = Backbone.Collection.extend({
	url: "/api/restaurants",
	model: Mosa.Models.Restaurant,

	getOrFetch: function(id) {
		var model = this.get(id),
			collection = this;
			
		if(!model) {
			model.fetch({
				success: function() {
					collection.add(model);
				}
			});
		} else {
			model.fetch();
		}
		
		return model;
	}
})

window.Mosa.Collections.restaurants = new window.Mosa.Collections.Restaurants();
