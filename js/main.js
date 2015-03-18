requirejs.config({
  'shim': {
    'backbone': {
      'deps': [ 'jquery', 'underscore' ],
      'exports': 'Backbone'
    },
    'backbone.babysitter': [ 'backbone' ],
    'backbone.wreqr': [ 'backbone' ],
    'boostrap': [ 'jquery' ],
    'marionette': {
      'deps': [ 'backbone', 'backbone.babysitter', 'backbone.radio' ],
      'exports': 'Marionette'
    },
    'underscore': {
      'exports': '_'
    }
  },
  'paths': {
    'backbone':            '../vendor/backbone',
    'backbone.babysitter': '../vendor/backbone.babysitter',
    'backbone.radio':      '../vendor/backbone.radio',
    'backbone.wreqr':      '../vendor/backbone.wreqr',
    'marionette':          '../vendor/backbone.marionette',
    'bootstrap':           '../vendor/bootstrap/dist/js/bootstrap',
    'handlebars':          '../vendor/handlebars',
    'jquery':              '../vendor/jquery',
    'hbs':                 '../vendor/require-handlebars-plugin/hbs',
    'underscore':          '../vendor/underscore',
    'marionette.radio':    'shims/marionette.radio'
  },
  'map': {
    '*': {
      'backbone.wreqr': 'backbone.radio',
      'marionette': 'marionette.radio'
    },
    'marionette.radio': {
      'marionette': 'marionette'
    },
    'hbs': {
      'hbs/handlebars': 'handlebars',
      'hbs/underscore': 'underscore'
    }
  }
});

requirejs(['app'], function(App) {
  App.start({
    'name': 'Carlito'
  });
});