window.Mosa.Views.RestaurantsIndex = Backbone.CompositeView.extend({
  template: JST['restaurants/index'],
  id: 'app-view',

  events: {
    'click a.sort' : 'resortCollection'
  },

  initialize: function(options) {
    Mosa.Views.RestaurantsIndex.page = Mosa.Views.RestaurantsIndex.page || 0;
    // add listener to event triggered by end of sorting to add subviews
    // this.listenTo(this.collection, 'add', this.addRestaurantSubview);
    this.listenTo(this.collection, 'sync', this.sortAndRender);
  },

  resortCollection: function(event) {
    event.preventDefault();
    if(event.currentTarget.id === "distance") {
      this.setDistanceComparator();
    } else if(event.currentTarget.id === "rating") {
      this.setRatingComparator();
    } else if(event.currentTarget.id === "low-price") {
      this.setPriceComparator("asc")
    } else if(event.currentTarget.id === "high-price") {
      this.setPriceComparator("desc");
    } else {
      this.setReviewsComparator();
    }

    this.sortAndRender();
    this.resetPageCount();
  },

  setDistanceComparator: function() {
    this.collection.comparator = function(restaurant) {
      return restaurant.distance();
    };
  },

  setRatingComparator: function() {
    this.collection.comparator = function(restaurant) {
      return restaurant.get("rating");
    };
  },

  setReviewsComparator: function() {
    this.collection.comparator = function(restaurant) {
      return restaurant.get("num_reviews");
    };
  },

  setPriceComparator: function(options) {
    if(options == "asc") {
        this.collection.comparator = function(restaurant) {
          return restaurant.get("btm_price");
        };
    } else {
      this.collection.comparator = function(restaurant) {
        return (-1 * restaurant.get("btm_price"));
      };
    }
    // this.renderSubivews();
    // var view = this;
    // this.restListCollection().each(function(restaurant) {
    //   view.addRestaurantSubview(restaurant);
    // });
    // this.addMapSubview(this.restListCollection());
  },

  sortAndRender: function() {
    this.collection.sort();
    this.render();

    var view = this;
    this.restListCollection().each(function(restaurant) {
      view.addRestaurantSubview(restaurant);
    });
    this.addMapSubview(this.restListCollection());
  },

  resetPageCount: function() {
    Mosa.Views.RestaurantsIndex.page = 0;
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

  restListCollection: function() {
    var restaurantList = this.collection.models.slice(
      (Mosa.Views.RestaurantsIndex.page * 20), ((Mosa.Views.RestaurantsIndex.page * 20) + 20)
    );

    return new Mosa.Collections.Restaurants(restaurantList, {
      comparator: false
    });
  },

  addRestaurantSubview: function(restaurant) {
    var restaurantListItemView = new Mosa.Views.RestaurantListItem({
      model: restaurant
    });
    this.addSubview("ul.restaurants-index", restaurantListItemView);
  },

  addMapSubview: function(restList) {
    var mapView = new Mosa.Views.MapShow({
      collection: restList
    });
    this.addSubview("#map-canvas", mapView);
  },

  render: function() {
    var content = this.template({ restaurants: this.restListCollection() });
    this.$el.html(content);
    this.attachSubviews();

    return this;
  }
})
