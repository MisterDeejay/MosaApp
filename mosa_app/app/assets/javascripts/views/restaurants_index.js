window.Mosa.Views.RestaurantsIndex = Backbone.View.extend({
  initialize: function(options) {
    this.restaurants = options.restaurants;
  },

  render: function() {
    this.restaurants.each(function(restaurant) {
      var content = // an unordered list of restaurants
      this.$el.html(content);

      return this;
    })
  }
})
