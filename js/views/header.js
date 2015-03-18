define([
  'marionette',
  'hbs!../../templates/header'
], function(Marionette, HeaderTemplate) {
  'use strict';
  var app = Marionette.Radio.channel('app');
  
  return Marionette.ItemView.extend({
    initialize: function(options) {
      this.model = app.request('model:user');
      this.listenTo(this.model, 'change', this.render);
    },
    template: HeaderTemplate
  });
});