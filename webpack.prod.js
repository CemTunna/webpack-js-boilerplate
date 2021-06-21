const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    filename: 'main.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  // minimize css file
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    //   cleans old version of hashed js file
    new CleanWebpackPlugin(),
    // creates html page with hashed js

    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
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
      // extract css into files
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
});
