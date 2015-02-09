window.Mosa.Views.RootShow = Backbone.CompositeView.extend({
  template: JST["root"],

  initialize: function(options) {
    this.listenTo(this.collection, "sync", this.render)
    this.router = options.router;
    this.latLng = [];
  },

  events: {
    "click button#current-location": "getLatLng",
    "submit": "getLatLng",
    "geocode": "renderIndexSubview"
  },

  getLatLng: function(event) {
    if (event.type === "click") {
      var view = this;
      navigator.geolocation.getCurrentPosition(function(position) {
        view.latLng = [position.coords.latitude, position.coords.longitude];
        view.router.index(view.latLng);
      });
    } else {
      event.preventDefault();
      $zipcode = $("#zipcode");
      zipcode = $zipcode.val();
      geocoder = new google.maps.Geocoder();

      var view = this;
      geocoder.geocode({ "address": zipcode }, function(results) {
        view.latLng = [results[0].geometry.location.k, results[0].geometry.location.D]
        view.router.index(view.latLng);
      });
    }
  },

  renderIndexSubview: function(event) {


  },

  render: function() {
    var content = this.template();
    this.$el.html(content);

    return this;
  }
})
