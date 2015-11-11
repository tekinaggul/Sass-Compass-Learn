module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'example/assets/js/script.js': ['example/assets/.components/js/script.js']
        } 
      }
    }, 
    compass: {
      dev: {
        options: {
          config: 'config.rb'
        }
      } 
    }, 
    watch: {
      scripts: {
        files: ['example/assets/.components/js/script.js'],
        tasks: ['uglify']
      }, 
      sass: {
        files: ['example/assets/.components/sass/*.scss'],
        tasks: ['compass:dev']
      } 
    } 
  }) 
  grunt.registerTask('default', 'watch');
} 