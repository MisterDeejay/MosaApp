window.Mosa.Views.RestaurantsIndex = Backbone.CompositeView.extend({
  template: JST['restaurants/index'],
  tagName: 'nav',
  id: 'sidebar',

  initialize: function(options) {
    Mosa.Views.RestaurantsIndex.page = Mosa.Views.RestaurantsIndex.page || 0;
    // add listener to event triggered by end of sorting to add subviews
    this.listenTo(this.collection, 'add', this.addRestaurantSubview);
    this.listenTo(this.collection, 'sync', this.sortByDist);
  },

  sortByDist: function() {
    this.collection.sort();
    this.render();
  },

  // Eventually refactor this method and make is a private method that you call
  // on the restaurant's display address
  parseAddress: function(restaurant) {
    var rawAddressArr = restaurant.attributes.display_address.slice(2, -2)
      .split(",");

    rawAddressArr = rawAddressArr.map(function(el) {
      var myRe = /[\w]+.+[^"]/;
      var myReArr = myRe.exec(el);

      return myReArr[0];
    });

    return rawAddressArr.join(",");
  },

  addRestaurantSubview: function(restaurant) {
    var restaurantListItemView = new Mosa.Views.RestaurantListItem({
      model: restaurant
    });
    this.addSubview("ul.restaurants-index", restaurantListItemView);
  },

  render: function() {
    debugger
    var restaurantList = this.collection.models.slice(
      (Mosa.Views.RestaurantsIndex.page * 20), ((Mosa.Views.RestaurantsIndex.page * 20) + 20)
    );
    var restListCollection = new Mosa.Collections.Restaurants(restaurantList);
    debugger
    // for(var i = 0; i < 20; i++)
    var content = this.template({ restaurants: restListCollection });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
})
