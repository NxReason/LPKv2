const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const extractSass = new ExtractTextPlugin({
  filename: '../css/styles.css',
  disable: isDev
});

const pathsToClean = ['assets'];
const cleanPlugin = new CleanWebpackPlugin(pathsToClean);

const config = {
  entry: './client/app',
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: 'app.bundle.js',
    publicPath: isDev ? 'http://localhost:8080/' : ''
  },

  devtool: isDev ? 'inline-source-map' : false,

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
        use: extractSass.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' }
          ],
          fallback: 'style-loader'
        })
      },

      // Images (icons)
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

  devServer: {
    contentBase: './assets',
    publicPath: '/',
    port: 8080
  },

  plugins: [
    extractSass,
    cleanPlugin
  ]
};

module.exports = config;
