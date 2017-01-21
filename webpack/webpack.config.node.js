// for babel-plugin-webpack-loaders
require('babel-register');
const devConfigs = require('./webpack.config.development');

module.exports = {
  output: {
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: devConfigs.module.loaders
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
