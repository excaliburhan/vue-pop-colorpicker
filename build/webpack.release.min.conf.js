var webpack = require('webpack')
var merge = require('webpack-merge')
var releaseConfig = require('./webpack.release.conf')

module.exports = merge(releaseConfig, {
  output: {
    filename: './dist/[name].min.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: false,
        warnings: false
      },
      sourceMap: false
    })
  ]
})
