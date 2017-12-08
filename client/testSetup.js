// This file isn't transpiled, so must use CommonJS and ES5
global.fetch = require('jest-fetch-mock')

// Register babel to transpile before tests run
// require('babel-register')();

// Disable webpack features that Jest doesn't understand
// require.extensions.css = () => {};

global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};
