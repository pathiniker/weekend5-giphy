angular.module('giphyApp')
  .controller('FavsController', FavsController);

  function FavsController(favService){
    var self = this;


    self.showFavs = function() {
      favService.getFavs().then(function(gifs){
        self.gifs = gifs;
        self.total = self.gifs.length
      });
    };




    self.showFavs();

  }
