// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'ul',

  template: _.template('<li> <div class="artist"><%= artist %></div> <div class="title"><%= title %> </div></li>'),

  events: {
    'click': function() {
      this.model.dequeue();
    }
  },


  initialize: function(){
    this.render()

  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes))
  }
  // your code here!
});
