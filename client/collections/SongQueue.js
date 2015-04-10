// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function(array){


    this.on("add", function(song){
      if(this.length === 1){
        this.playFirst()
      }
    });

    this.on('ended', function(song){
      this.shift();
      if(this.length > 0){
        this.playFirst();
      }
    });

    this.on('dequeue', function(song){
      if(this.at(0) === song){
        this.playNext();
      }else{
        this.remove(song)
      }
    });

  },

  playNext: function(){
    this.shift();
    if(this.length >= 1){
      this.playFirst();
    }else{
      this.trigger('stop');
    }
  },

  playFirst: function(){
    this.at(0).play();
  }
});





//set timeouts in tests
