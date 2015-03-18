define([ 
  'backbone',
  'marionette',
  'entities/collections/list',
  'entities/models/user',
  'views/layout',
  'views/header',
  'views/list',
], function(Backbone, Marionette, List, User, LayoutView, HeaderView, ListView) {
  'use strict';
  
  var app = new Marionette.Application(),
      channel = Marionette.Radio.channel('app');
   
  app.on('start', function(options) {
    if (Backbone.history) {
      Backbone.history.start();
    }
    
    app.rootView = new LayoutView({
      el: '#container'
    });
 
    app.rootView.render();
  });
  
  channel.comply('entity:fetch', function(entity) {
    entity.fetch({
      sucess: function(model, response, options) {
        console.log("success", model, response, options);
      },
      error: function(model, response, options) {
        console.log("error", model, response, options);
      }      
    });
  });
  
  channel.reply('model:user', function() {
    var user = new User();
    
    channel.command('entity:fetch', user);
    
    return user;
  });
  
  channel.reply('collection:list', function() {
    var list = new List();
    
    channel.command('entity:fetch', list);
    
    return list;
  });
  
  channel.reply('view:header', function() {
    var headerView = new HeaderView();
    
    return headerView;
  });
  
  channel.reply('view:list', function() {
    var listView = new ListView();
    
    return listView;
  });
  
  return app;
});