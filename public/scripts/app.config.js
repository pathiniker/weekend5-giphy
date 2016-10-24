angular.module('giphyApp')
       .config(function($routeProvider, $locationProvider) {
         $routeProvider.when('/index', {
           templateUrl: 'views/index.html',
           controller: 'MainController as main'
         }).when('/favorites', {
           templateUrl: 'views/favorites.html',
           controller: 'FavController as fav'
         }).otherwise({
           redirectTo: '/index'
         });

         // lets us use normal looking links
         // i.e. /home
         // remember, to use this, need to set base href in html
         $locationProvider.html5Mode(true);
       });
