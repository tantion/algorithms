module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    meta : {
      src   : 'src/**/*.js',
      specs : 'spec/**/*.spec.js'
    },
    watch: {
      test : {
        files: ['<%= meta.src %>','<%= meta.specs %>'],
        tasks: 'test'
      }
    },
    jasmine : {
      main : {
        src : '<%= meta.src %>',
        options : {
          specs   : '<%= meta.specs %>',
          helpers : 'spec/**/*.helper.js',
          vendor : [
            'vendor/jquery*.js',
            'vendor/lodash*.js',
            'vendor/backbone*.js',
            'vendor/marionette*.js'
          ]
        }
      }
    },
    jshint: {
      all: [
        'Gruntfile.js',
        '<%= meta.src %>',
        '<%= meta.specs %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    open : {
      tests : {
        url : 'http://127.0.0.1:8000/_SpecRunner.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('test', ['jshint', 'jasmine']);
  grunt.registerTask('test-web', ['jshint', 'connect', 'jasmine:main:build', 'open:tests','watch']);

  // Default task.
  grunt.registerTask('default', ['test']);

};
