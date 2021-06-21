const path = require('path');
module.exports = {
  devtool: false,
  entry: './src/index.js',
  module: {
    rules: [
      // babel
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
