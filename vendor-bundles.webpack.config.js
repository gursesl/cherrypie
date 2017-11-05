const path = require('path')
const webpack = require('webpack')

const DIST_DIR = path.resolve(__dirname, 'dist')

module.exports = {
  entry: {
    // create two library bundles, one with jQuery and
    // another with Angular and related libraries
    vendor: ['react', 'redux'],
  },

  output: {
    filename: '[name].bundle.js',
    path: DIST_DIR,

    // The name of the global variable which the library's
    // require() function will be assigned to
    library: '[name]_lib',
  },

  plugins: [
    new webpack.DllPlugin({
      // The path to the manifest file which maps between
      // modules included in a bundle and the internal IDs
      // within that bundle
      path: 'dist/[name]-manifest.json',
      // The name of the global variable which the library's
      // require function has been assigned to. This must match the
      // output.library option above
      name: '[name]_lib',
    }),
  ],
}
