angular.module('giphyApp')
       .config(function($routeProvider, $locationProvider) {
         $routeProvider.when('/index', {
           templateUrl: 'views/index.html'
         }).when('/favorites', {
           templateUrl: 'views/favorites.html'
         }).otherwise({
           redirectTo: '/index'
         });

         // lets us use normal looking links
         // i.e. /home
         // remember, to use this, need to set base href in html
         $locationProvider.html5Mode(true);
       });
