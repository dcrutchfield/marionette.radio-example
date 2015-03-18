define([
  'backbone',
  'entities/models/list-item'
], function(Backbone, ListItem) {
  'use strict';
  
  return Backbone.Collection.extend({
    model: ListItem,
    url: 'data/list-data.json'
  });
});