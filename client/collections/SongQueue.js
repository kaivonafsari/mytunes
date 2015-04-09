// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function(){

      // this.playFirst();


  },
  playFirst: function(){
    if(this.length) {
      play(this.at(0))
    }
  }
});
