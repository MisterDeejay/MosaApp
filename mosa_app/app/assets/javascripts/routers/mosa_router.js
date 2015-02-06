window.Mosa.Routers.MosaRouter = Backbone.Router.extend({
	initialize: function(options) {
		console.log("initialize, bitch");
		this.$rootEl = options.$rootEl;
	},

	routes: {
		"map": "index",
		":id-:name": "show"
	},

	index: function() {
		console.log("some shit");
		Mosa.Collections.restaurants.fetch();

		var indexView = new Mosa.Views.RestaurantsIndex({
			collection: Mosa.Collections.restaurants
		});
		var mapView = new Mosa.Views.MapShow({
			collection: Mosa.Collections.restaurants
		});
		this._swapMapView(indexView, mapView);
	},

	show: function(id) {
		var restaurant = Mosa.Collections.restaurants.getOrFetch(id);

		var showView = new Mosa.Views.RestaurantShow({
			model: restaurant
		});
		this._swapView(showView);
	},

	_swapView: function(view) {
		// stopListening() removes events on a view
		if(this._currentView || this._mapView) {
			this._currentView.remove();
			this._mapView.remove();
		}
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	},

	_swapMapView: function(view, mapView) {
		if(this._currentView || this._mapView) {
			this._currentView.remove();
			this._mapView.remove();
		}
		this._currentView = view;
		this._mapView = mapView;
		this.$rootEl.html(view.render().$el);
		this.$rootEl.append(mapView.$el);
		mapView.render();
	}
})


// replaceWith method replaces a jQuery $el with another $el (ie a button with
// a form on click) $(button#form).replaceWith(form)
