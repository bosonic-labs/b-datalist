'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    clean: {
      dist: ['dist'],
    },

    bosonic: {
      components: {
        src: ['src/*.html'],
        css: 'dist/b-datalist.css',
        js:  'dist/b-datalist.js'
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    watch: {
      source: {
        files: ['src/*.html'],
        tasks: ['clean', 'bosonic']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-bosonic');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['dist', 'watch']);
  grunt.registerTask('test', ['dist', 'karma']);
  grunt.registerTask('dist', ['clean', 'bosonic']);

};
