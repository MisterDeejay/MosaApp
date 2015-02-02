window.Mosa.Views.RestaurantShow = Backbone.View.extend({
	template: JST["restaurant/show"],
	
	initialize: function(options) {
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.model.comments(), "sync add remove", this.render);
	},
	
	render: function() {
		var content = 
		
		return this;
	}
})