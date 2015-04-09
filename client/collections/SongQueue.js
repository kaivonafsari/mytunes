// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function(array){
    // _.each(array, function(el){
    //   el.enqueue
    // });
    //

    this.on("add", function(e){
      if(this.length === 1){
        this.playFirst()
      }
    });

    this.on('ended', function(e){
      this.shift();
      if(this.length > 0){
        this.playFirst();
      }
    });

    this.on('dequeue', function(e){
      this.remove(e);
    });

  },
  playFirst: function(){
    console.log("I've been called")
    this.at(0).play();
  }
});





//set timeouts in tests
