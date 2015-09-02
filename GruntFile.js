/*!
 * Crossover Gruntfile 
 * @author Wallace Goulart Gaudie Ley
 */
 
'use strict';
 
/**
 * Grunt Module
 */
module.exports = function(grunt) {
	/**
	 * Load Grunt plugins
	 */
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	/**
	 * Configuration
	 */
	grunt.initConfig({
		/**
		 * Get package meta data
		 */
		pkg: grunt.file.readJSON('package.json'),

		/**
		 * Set project object
		 */
		project: {
		  app: 'app',
		  assets: '<%= project.app %>/assets',
		  src: '<%= project.app %>/src',
		  css: [
		    '<%= project.src %>/scss/main.scss'
		  ],
		  js: [
		    '<%= project.src %>/js/*.js'
		  ]
		},

		
		/**
		 * Sass
		 */
		sass: {
		  dev: {
		    options: {
		    	style: 'expanded',
		    	compass: true,
				sourcemap: 'none'
		    },
		    files: {
		      '<%= project.assets %>/css/styles.css': '<%= project.css %>'
		    }
		  },
		  dist: {
		    options: {
		    	style: 'compressed',
		    	compass: true,
				sourcemap: 'none'
		    },
		    files: {
		      '<%= project.assets %>/css/styles.css': '<%= project.css %>'
		    }
		  }
		},
		/**
		 * Watch
		 */
		watch: {
		  sass: {
		    files: '<%= project.src %>/scss/{,*/}*.{scss,sass}',
		    tasks: ['sass:dev']
		  }
		}
	});
 	

	/**
	 * Default task
	 * Run `grunt` on the command line
	 */
	grunt.registerTask('default', [
	  'sass:dev',
	  'watch'
	]);

	grunt.registerTask('w', [
	  'watch'
	]);

	grunt.registerTask('s', [
	  'sass:dev'
	]);

};

