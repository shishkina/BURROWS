const path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: path.join(__dirname, 'client', 'index.js'),
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};