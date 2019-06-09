const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const context = path.resolve(__dirname, 'src');
const template = path.resolve(__dirname, 'src/index.html');

module.exports = {
  context,
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'console-log',
  },
  node: {
    fs: 'empty',
  },
  devtool: 'source-map',
  plugins: [
   new MiniCssExtractPlugin({
     filename: '[name].css',
     chunkFilename: '[id].css',
   }),
   new HtmlWebpackPlugin({
      title: 'a11y-react',
      filename: 'index.html',
      languageCode: 'en-US',
      template: template,
      inject: true,
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        description: 'a11y-react',
      },
    }),
 ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[hash:base64:3]',
              importLoaders: 3,
            },
          },
          {
            loader: 'quark-loader',
            options: {
              compress: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
