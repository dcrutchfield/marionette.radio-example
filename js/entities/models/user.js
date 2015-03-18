define([
  'backbone'
], function(Backbone) {
  'use strict';
  
  return Backbone.Model.extend({
    url: 'data/user-data.json'
  });
});