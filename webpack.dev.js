const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(common, {
  mode: 'development',
  devtool: false,
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // creates html page with hashed js
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // Multiple Files can be added like that

    // new HtmlWebpackPlugin({
    //   filename: 'x.html',
    //   template: './src/x.html',
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'y.html',
    //   template: './src/y.html',
    // }),
  ],
  module: {
    rules: [
      // css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});
