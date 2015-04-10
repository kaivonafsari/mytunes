// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'ul',

  template: _.template('<li> <div class="artist"><%= artist %></div> <div class="title"><%= title %> </div> <div class="playcount"><%=playCount%></div></li>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }

  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
