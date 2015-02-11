window.Mosa.Collections.RestaurantReviews = Backbone.Collections.extend({
  model: Mosa.Models.Review,
  url: function() {
    return this.restaurant.url() + "/reviews";
  },

  initialize: function(models, options) {
    this.restaurant = options.restaurant;
  }
})
