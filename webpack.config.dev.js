const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const AutoDllPlugin = require('autodll-webpack-plugin')

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
  devtool: 'cheap-module-eval-source-map',
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
    filename: '[name].bundle.js',
  },
  plugins: [
    // Create HTML file with references to bundled JS
    new HtmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
      inject: true,
    }),
    new Dotenv({
      path: `${__dirname}/.env`, // Path to .env file (this is the default)
      safe: false, // load .env.example (defaults to "false" which does not use dotenv-safe)
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new AutoDllPlugin({
      inject: true, // will inject the DLL bundle to index.html
      debug: true,
      filename: '[name]_[hash].js',
      path: './dll',
      entry: {
        vendor: [
          'apollo-cache-inmemory',
          'apollo-client',
          'apollo-client-preset',
          'apollo-link',
          'apollo-link-context',
          'apollo-link-http',
          'apollo-server-express',
          'autodll-webpack-plugin',
          'babel-eslint',
          'bcrypt',
          'body-parser',
          'chalk',
          'cloc',
          'compression',
          'cors',
          'dotenv',
          'dotenv-webpack',
          'enzyme',
          'enzyme-adapter-react',
          'express',
          'express-history-api-fallback',
          'faker',
          'fetch-mock',
          'file-loader',
          'graphql',
          'graphql-tag',
          'graphql-tools',
          'history',
          'immutable',
          'jest-fetch-mock',
          'json-schema-faker',
          'merge-graphql-schemas',
          'mime',
          'mongoose',
          'morgan',
          'nodemon',
          'open',
          'prop-types',
          'react',
          'react-apollo',
          'react-dom',
          'react-immutable-proptypes',
          'react-redux',
          'react-router',
          'react-router-dom',
          'react-router-redux',
          'redux',
          'redux-form',
          'redux-immutable',
          'redux-mock-store',
          'redux-saga',
          'redux-thunk',
          'regenerator-runtime',
          'request',
          'reselect',
          'semantic-ui-css',
          'semantic-ui-less',
          'semantic-ui-react',
          'semantic-ui-react-less-loader',
          'sloc',
          'styled-components',
          'url-loader',
          'webpack',
          'webpack-dev-middleware',
          'whatwg-fetch',
        ],
      },
    }),
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
