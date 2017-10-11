// This file isn't transpiled, so must use CommonJS and ES5

// Register babel to transpile before tests run
require('babel-register')();

// Disable webpack features taht Mocha doesn't understand
require.extensions.css = function () {};

global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};
