var Workspace = Backbone.Router.extend({

    routes: {
      "help":                 "help",    // #help
      "search/:query":        "search",  // #search/kiwis
      "search/:query/p:page": "search"   // #search/kiwis/p7
    },
  
    help: function() {
      alert('JAJAJAJA')
    },
  
    search: function(query, page) {
        alert('JEJEJE')
    }
  
  });

  app.navigate("help/troubleshooting", {trigger: true});
