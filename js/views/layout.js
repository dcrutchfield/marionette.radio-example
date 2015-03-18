define([
  'marionette',
  'hbs!../../templates/layout'
], function(Marionette, LayoutTemplate) {
  'use strict';
  var app = Marionette.Radio.channel('app');
  
  return Marionette.LayoutView.extend({
    initialize: function() {
      this.headerView = app.request('view:header');
      this.listView = app.request('view:list');
    },
    template: LayoutTemplate,
    regions: {
      header: '#header',
      main: '#main'
    },
    onRender: function() {
      this.header.show(this.headerView);
      this.main.show(this.listView);
    }
  });
});