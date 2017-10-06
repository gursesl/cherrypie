module.exports = {
  verbose: true,
  "setupFiles": ["./buildScripts/testSetup.js"],
  "coveragePathIgnorePatterns": ["/node_modules/", "/buildScripts/"],
  "collectCoverageFrom" : ["**/*.{js,jsx}", "!**/node_modules/**", "!**/vendor/**"],
  "testMatch": [ '**/__tests__/**/*.js?(x)', '**/?(*.)(spec|test).js?(x)' ]
};
