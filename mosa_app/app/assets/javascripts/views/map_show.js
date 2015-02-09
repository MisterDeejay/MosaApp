window.Mosa.Views.MapShow = Backbone.CompositeView.extend({
  template: JST["restaurants/list_item"],
  attributes: {
    id: "map-canvas"
  },

  initialize: function (location_arr) {
    this._markers = {};

    this.listenTo(this.collection, 'add sync', this.addMarker);
    this.listenTo(this.collection, 'remove', this.removeMarker);
  },

  render: function() {
    var mapOptions = {
      center: { lat: 37.7833, lng: -122.4167 },
      zoom: 13
    };

    this._map = new google.maps.Map(this.el, mapOptions);
    this.collection.each(this.addMarker.bind(this));
  },

  addMarker: function(restaurant) {
    // debugger
    if(this._markers[restaurant.id]) { return };
    var view = this;

    var latLng = new google.maps.LatLng(
      restaurant.get('lat'),
      restaurant.get('lng')
    );

    var marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: latLng,
      map: this._map,
      title: restaurant.get('name')
    });

    var restaurant = restaurant;
    google.maps.event.addListener(marker, 'click', function(event) {
      view.showMarkerInfo(event, marker, restaurant);
    });

    this._markers[restaurant.id] = marker;
  },

  removeMarker: function(restaurant) {
    var marker = this._markers[listing.id];
    marker.setMap(null);
    delete this._markers[listing.id];
  },

  showMarkerInfo: function(event, marker, restaurant) {
    var restaurantContent = this.template({ restaurant: restaurant });
    var infoWindow = new google.maps.InfoWindow({
      content: restaurantContent
    });

    infoWindow.open(this._map, marker);
  }
})
