module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    webpack: {
      options: {
        entry: './src/script.js',
        resolve: {
          modulesDirectories: ['node_modules']
        },
        cache: true
      },
      dev: {
        output: {
          path: './dist/',
          filename: 'script.js',
          pathinfo: true
        },
        devtool: 'eval-source-map',
        debug: true
      }
    }
  });

  grunt.registerTask('build', ['webpack:dev']);
};
