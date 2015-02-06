window.Mosa.Views.RestaurantsIndex = Backbone.CompositeView.extend({
  template: JST['restaurants/index'],
  tagName: 'nav',
  id: 'sidebar',

  initialize: function(options) {
    this.listenTo(this.collection, 'add', this.addRestaurantSubview);
    this.listenTo(this.collection, 'sync', this.render);
    var view = this;
    this.collection.each(function(restaurant) {
      view.addRestaurantSubview(restaurant);
    })
  },

  addRestaurantSubview: function(restaurant) {
    var restaurantListItemView = new Mosa.Views.RestaurantListItem({
      model: restaurant
    });
    this.addSubview("ul.restaurants-index", restaurantListItemView);
  },

  render: function() {
    var content = this.template({ restaurants: this.collection });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
})
