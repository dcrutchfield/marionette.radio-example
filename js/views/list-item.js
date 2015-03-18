define([
  'marionette',
  'hbs!../../templates/list-item'
], function(Marionette, ListItemTemplate) {
  'use strict';
  
  return Marionette.ItemView.extend({
    initialize: function(options) {
      this.listenTo(this.model, 'change', this.render);
    },
    template: ListItemTemplate
  });
});