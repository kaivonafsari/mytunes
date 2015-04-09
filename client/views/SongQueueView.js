// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
     this.$el.html('<h1>Hello</h1>')
    return $('body').append(this.$el)

  }

});
