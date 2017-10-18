const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')

const imgQuery = {
  bypassOnDebug: true,
  optipng: {
    optimizationLevel: 7,
  },
  gifsicle: {
    interlaced: false,
  },
}

const SRC_DIR = path.resolve(__dirname, 'src')
// const DIST_DIR = path.resolve(__dirname, 'dist')

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    // contentBase: DIST_DIR,
    compress: true,
    hot: true,
    port: process.env.PORT || 5000,
  },
  entry: [
    path.resolve(__dirname, `${SRC_DIR}/index.js`),
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, SRC_DIR),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    // Create HTML file with references to bundled JS
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
    }),
    new Dotenv({
      path: './.env', // Path to .env file (this is the default)
      safe: false, // load .env.example (defaults to "false" which does not use dotenv-safe)
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: ['es2015', 'react', 'stage-2'] },
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          `image-webpack-loader?${JSON.stringify(imgQuery)}`,
        ],
      },
    ],
  },
}
