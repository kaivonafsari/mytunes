// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "div",

  initialize: function() {
    this.render();
    this.collection.on("add ended dequeue", this.render, this)

  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<h4>Playlist</h4>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model:song}).render();
      })
    );
  }

});
