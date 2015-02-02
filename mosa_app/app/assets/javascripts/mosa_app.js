window.Mosa = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
	 // Eventually I'm going to boot up a controller here
    alert("Welcome to 'Mosa. Your one-stop site for all things brunch and booze related.");
	 // Instantiate new Router and start listening to changes in location bar
	 new Mosa.Routers.MosaRouter();
	 Backbone.history.start();
  }
};

$(document).ready(function(){
  Mosa.initialize();
});
