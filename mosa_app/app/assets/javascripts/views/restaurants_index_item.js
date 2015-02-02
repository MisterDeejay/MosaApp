window.Mosa.Views.RestaurantsIndexItem = Backbone.View.extend({
	template: JST["restaurants/index"],
	tagName: 'li',
	
	initialize: function(options) {
		this.listenTo(this.model, "sync", this.render);
	},

	render: function() {
		
		this.model.fetch();
		this.restaurants.each(function(restaurant) {
			var content = this.template({ restaurant: this.model });
			this.$el.html(content);

			return this;
		});
	}
})
