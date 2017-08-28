var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: '"http://apitest.example.com"',
  HTML_TITLE: 'vue-pop-colorpicker - dev'
})
