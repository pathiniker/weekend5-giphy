var app = angular.module('giphyApp', []);

app.controller('MainController', MainController);

  var API = 'http://api.giphy.com/v1/gifs';
  var key = 'api_key=dc6zaTOxFJmzC';

function MainController($http){
  var main = this;
  console.log('Maincontroller loaded');

  main.gifs = {};
  main.lines = [];
  main.query = {};
  main.gifsArray = [];



  main.getFilmData = function(){
    main.lines = [];
    main.class = '';
    $http.get(main.selected)
        .then(function(response){
          main.lines = response.data.opening_crawl.split('\n');
          main.class = 'scroll';
        });
};

  main.getRandom = function(){

    $http.get(API + '/random?' + key)
        .then(function(response){
          console.log('response', response);
          main.gifs = response.data.data;
        });
  }

  main.getSearch = function(){
    main.query = angular.copy(main.searchPhrase);

    console.log(main.query);
    // console.log(encodeURI(main.searchPhrase.q));

    $http.get(API + '/search?q=' + encodeURI(main.searchPhrase.q.replace(' ', '+')) + '&' + key)
    .then(function(response){
      console.log('response', response);
      main.gifsArray = response.data.data;
  });
}

};
