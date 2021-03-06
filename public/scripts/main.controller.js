angular.module('giphyApp')
      .controller('MainController', MainController);



function MainController(giphy){
  var main = this;
  console.log('Maincontroller loaded');

  main.gifs = {};
  main.query = {};
  main.gifsArray = [];

  main.getRandom = function(){
    giphy.getRandom()
        .then(function(response){
          main.gifs = response;
          console.log(response);
});
};

main.getTrending = function(){
  giphy.getTrending()
      .then(function(response){
        main.gifsArray = response;
        console.log(response);
});
};

  main.getSearch = function(){
    giphy.getSearch(main.searchPhrase)
      .then(function(response){
      main.gifsArray = response;
      console.log(response);
  });
}

  main.getSelected = function(){
    giphy.getSelected(main.selected)
        .then(function(response){
          main.gifsArray = response;

        });
  }

  var favGif = {};

    main.saveGif = function(index) {
      favGif.url = main.gifsArray[index].images.original.url; //may need to add gif.images in here
      favGif.description = main.gifDescription[index];
      giphyService.saveGif(favGif);
      main.gifDescription[index] = '';
    }

};
