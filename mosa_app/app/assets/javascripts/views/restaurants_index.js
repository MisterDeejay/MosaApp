window.Mosa.Views.RestaurantsIndex = Backbone.CompositeView.extend({
  template: JST['restaurants/index'],
  tagName: 'nav',
  id: 'sidebar',

  initialize: function(options) {
    this.currentLocation = options.location_arr;
    this.listenTo(this.collection, 'add', this.addRestaurantSubview);
    this.listenTo(this.collection, 'sync', this.sortCollectionByDist);
    var view = this;
    // for (var i = 0; i < 20; i++) {
    //   view.addRestaurantSubview(this.collection[i]);
    // }
  },

  sortCollectionByDist: function(event){
    var view = this;
    restaurants = this.collection.slice(0,3);
    for(var i = 0; i < this.collection.length; i++) {
      this.collection.models[i].attributes.display_address =
        view.parseAddress(this.collection.models[i]);
      debugger

    }

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
    var content = this.template({ restaurants: this.collection });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
})
