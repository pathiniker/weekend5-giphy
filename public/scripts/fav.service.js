angular.module('giphyApp')
      .service('favService', favService);

function favService($http) {

  var service = this;

  service.getFavs = function() {
    return $http.get('/favorites')
        .then(function(response) {
          return response.data;
        });
  };





}
