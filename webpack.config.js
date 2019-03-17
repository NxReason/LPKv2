const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDev = process.env.NODE_ENV === 'development';

const extractStyles = new MiniCssExtractPlugin({
  filename: '../css/styles.css',
});

const config = {
  entry: './client/app',
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: 'app.bundle.js',
    publicPath: isDev ? 'http://localhost:8080/' : ''
  },

  module: {
    rules: [
      // JavaScript files
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'client'),
        loader: 'babel-loader'
      },

      // SASS/CSS files
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'client'),
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },

      // // Images (icons)
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        include: path.resolve(__dirname, 'client'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: isDev ? 'img/' : '../img/'
            }
          }
        ]
      }
    ]
  },

  resolve: {
    modules: [
      path.resolve('./client'),
      path.resolve('./node_modules')
    ]
  },

  devServer: {
    contentBase: './assets',
    publicPath: '/',
    port: 8080
  },

  plugins: [ extractStyles ]
};

module.exports = config;
