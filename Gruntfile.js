module.exports = function(grunt) {
  grunt.initConfig({
    'jshint': {
      'files': [
        'Gruntfile.js', 
        'js/**/*.js'
      ],
      'options': {
        'globals': {
          'jQuery': true
        }
      }
    },
    'watch': {
      'files': [ '<%= jshint.files %>' ],
      'tasks': [ 'jshint' ]
    },
    'bower-map': {
      'default': {
        'options': {
          'dest': 'vendor'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bower-map');
  
  grunt.registerTask('default', [ 'jshint', 'bower-map' ]);
};