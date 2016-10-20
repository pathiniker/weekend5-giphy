angular.module('giphyApp')
      .controller('MainController', MainController);


function MainController(giphy){
  var main = this;
  console.log('Maincontroller loaded');

  main.gifs = {};
  main.lines = [];
  main.query = {};
  main.gifsArray = [];

  main.getRandom = function(){
    giphy.getRandom()
        .then(function(response){
          main.gifs = response;
});
};

  main.getSearch = function(){
    giphy.getSearch(main.searchPhrase)
      .then(function(response){
      main.gifsArray = response;
  });
}

  main.getSelected = function(){
    giphy.getSelected(main.selected)
        .then(function(response){
          main.gifsArray = response;
        });
  }

};
