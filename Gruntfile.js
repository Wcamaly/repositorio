module.exports = function (grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          
        }
      }
    },
    watch: {
      project: {
        files: [
          'public/**/*.js', 
          'public/**/*.html', 
          'public/**/*.json', 
          'public/**/*.css',
          'public/**/*.scss',
          'node_modules/chico/**/*.js',
          'node_modules/chico/**/*.css'
        ],
        options: {
          livereload: true
        }
      }
    },

    /* Tarea Sass*/
    sass: {                          
        dist: { 
          options: {
            style: 'expanded'
        },
        files: {
          'public/tmp/main.css': 'public/scss/main.scss'
        }
      }
    },
    /* Tarea autoprefixer*/
    autoprefixer: {
      options: {
         browsers: ['opera 12', 'ff 15', 'chrome 25', 'ie 8', 'ie 9']
      },
      single_file: {
        src: 'public/tmp/main.css',
        dest: 'public/css/main.css'
       },
    },
    /* Tarea minifi html */
    htmlmin: {                                     
      dist: {                                      
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {  
          'min/index.html': 'public/*.html',
           }
      }
      
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'public/css',
          src: ['*.css', '!*.min.css'],
          dest: 'min/',
          ext: '.min.css'
        }]
      }
    },
    uglify: {
      my_target: {
        files: {
          'min/script.min.js': ['public/js/app.js']
        }
      }
    }
   
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
 

  grunt.registerTask('default', ['connect', 'sass','autoprefixer','htmlmin','cssmin','uglify','watch']);

};
