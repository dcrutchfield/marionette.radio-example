define([
  'marionette',
  'views/list-item',
  'hbs!../../templates/list'
], function(Marionette, ListItemView, ListTemplate) {
  'use strict';
  var app = Marionette.Radio.channel('app');
  
  return Marionette.CompositeView.extend({
    initialize: function(options) {
      this.collection = app.request('collection:list');
      this.listenTo(this.collection, 'change', this.render);
    },
    template: ListTemplate,
    childView: ListItemView,
    childViewContainer: 'ul'
  });
});