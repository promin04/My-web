var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    frameworks:['mocha'],
    files:['*.js'],
    browsers:['Chrome'],
    singleRun: true,
    files: ['./test/**/*.test.jsx'],
    preprocessors: {'test/**/*.test.jsx':['webpack','sourcemap']},
    reporters: ['mocha'],
    client: {
      mocha:{
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
