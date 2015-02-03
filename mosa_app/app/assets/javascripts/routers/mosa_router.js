window.Mosa.Routers.MosaRouter = Backbone.Router.extend({
	routes: {
		"": "restaurantIndex",
		"/restaurants/:id": "restaurantsShow" 
	},
	
	restaurantsIndex: function() {
		
	},
	
	restaurantsShow: function(id) {
		
	},
	
	_swampView: function(view) {
		// stopListening() removes events on a view
		if(this.currentView) {
			this.currentView.remove();
		}
		this.currentView = view;

		$("body").html(view.render().$el);
	}
})