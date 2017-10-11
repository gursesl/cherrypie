import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const imgQuery = {
  bypassOnDebug: true,
  optipng: {
    optimizationLevel: 7,
  },
  gifsicle: {
    interlaced: false,
  },
};


const DIST_DIR  = path.resolve(__dirname, 'build/')
const SRC_DIR = path.resolve(__dirname, 'src')

export default {
  devtool: 'inline-source-map',
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
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
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
};
