const path = require('path');

const config = {
  entry: './client/app',
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: 'app.bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'client'),
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;
