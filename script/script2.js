var Router = Backbone.Router.extend({
    routes: {
        '': 'home',
        'home': 'home',
        'about': 'about',
        'contact': 'contact'
    },

    home: function () {
        $('#container-general').empty();
        router.navigate('home', true);
        $("#container-general").load('../views/home.html');
    },
    about: function () {
        $('#container-general').empty();
        router.navigate('about', true);
        $("#container-general").load('../views/about.html');
    },
    contact: function () {
        router.navigate('contact', true);
        $('#container-general').empty();
        $("#container-general").load('../views/contact.html');
    }
});

//'router' is an instance of the Router
var router = new Router();

//Start listening to the routes and manages the history for bookmarkable URL's
Backbone.history.start();

