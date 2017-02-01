import webpack from 'webpack';
import baseConfig from './webpack.config.base';

export default {
  ...baseConfig,

  devtool: 'source-map',

    entry: './main.js',

    output: {
      ...baseConfig.output,
      path: __dirname,
      filename: '../index.js'
    },

    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      })
    ],

    target: 'electron-main',

    node: {
      __dirname: false,
      __filename: false
    },

    externals: [
      ...baseConfig.externals,
      'electron-config',
    ]
};
