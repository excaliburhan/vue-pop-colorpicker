/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-08-24 03:59:25
 * @modify date 2017-08-24 03:59:25
 * @desc [description]
*/

var path = require('path')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    'vue-colorpicker': './src/index.js'
  },
  output: {
    filename: './dist/[name].js',
    library: 'VueColorpicker',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')],
        exclude: /node_modules/
      }
    ]
  }
}
