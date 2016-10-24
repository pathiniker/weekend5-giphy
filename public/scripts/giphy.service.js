angular.module('giphyApp')
      .service('giphy', GiphyAPIService);

function GiphyAPIService($http){
  var API = 'http://api.giphy.com/v1/gifs';
  var key = 'api_key=dc6zaTOxFJmzC';


  this.getRandom = function(){
    return $http.get(API + '/random?' + key)
                .then(function(response){
    return response.data.data;
    });
  };

  this.getTrending = function(){
    return $http.get(API + '/trending?' + key)
                .then(function(response){
    return response.data.data;
    });
  };

  this.getSearch = function(searchPhrase){
    return $http.get(API + '/search?q=' + encodeURI(searchPhrase.q.replace(' ', '+')) + '&' + key)
                .then(function(response){
    return response.data.data;
    });
  };

  this.getSelected = function(searchPhrase){
    return $http.get(API + '/search?q=' + encodeURI(searchPhrase.replace(' ', '+')) + '&' + key)
                .then(function(response){
    return response.data.data;
    });
  };

  this.saveGif = function(gifData) {
    $http({
      method: 'POST',
      url: '/favorites',
      data: gifData
    }).success(function() {
      console.log('Saved GIF!');
    });
  };

}



// this.getRandom = function(){
//   return $http.get(API + '/random?', {
//     params: {
//       api_key: 'dc6zaTOxFJmzC',
//       rating: 'y'
//     }
//   })
//               .then(function(response){
//   return response.data.data;
//   });
// };
