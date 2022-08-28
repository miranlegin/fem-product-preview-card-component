module.exports = function (grunt) {
  // 1. All configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      assemble: {
        files: [
          'app/content/page/*.hbs',
          'app/layout/*.hbs',
          'app/partials/*.hbs',
          'app/data/*.{json,yml}',
        ],
        tasks: ['assemble'],
      },
      css: {
        files: ['sass/**/*.scss'],
        tasks: ['sass', 'postcss'],
      },
    },

    sass: {
      dist: {
        options: {
          style: 'compressed',
        },
        files: {
          'css/compiled.css': 'sass/main.scss',
        },
      },
    },

    postcss: {
      options: {
        map: {
          inline: false,
          annotation: 'css/maps/',
        },
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions'],
          }),
        ],
      },
      dist: {
        src: 'css/*.css',
      },
    },

    assemble: {
      options: {
        flatten: true,
        layout: 'default.hbs',
        layoutdir: 'app/layout/',
        partials: 'app/partials/*.hbs',
        data: 'app/data/*.{json,yml}',
      },
      /*
			docs: {
				// override task-level layout
				options: {
					layout: 'docs.hbs'
				},
				files: {
					'dist/': ['app/content/docs/*.hbs' ]
				}
			},
			*/
      page: {
        files: {
          'dist/': ['app/content/page/*.hbs'],
        },
      },
    },
  });

  // 3. Where we tell Grunt we plan to use this plug-in.

  grunt.loadNpmTasks('grunt-assemble');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['assemble', 'watch']);
  grunt.registerTask('build', ['sass', 'postcss', 'assemble']);
};
