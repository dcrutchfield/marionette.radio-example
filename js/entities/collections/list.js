define([
  'backbone',
  'entities/models/list-item'
], function(Backbone, ListItem) {
  'use strict';
  
  return Backbone.Collection.extend({
    model: ListItem,
    url: function() {
      return '/data/list-data.json';
    }
  });
});