define([
  'backbone'
], function(Backbone) {
  'use strict';
  
  return Backbone.Model.extend({
    url: function() {
      return '/data/user-data.json';
    }
  });
});