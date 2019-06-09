const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const dist = path.resolve(__dirname, 'dist')
module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: dist,
    compress: true,
    port: 9000
  }
});
