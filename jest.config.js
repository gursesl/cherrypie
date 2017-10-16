module.exports = {
  verbose: true,
  setupFiles: ['./buildScripts/testSetup.js'],
  coveragePathIgnorePatterns: ['/node_modules/', '/buildScripts/'],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '**/*.test.{js,jsx}',
    '!dist/**',
    '!coverage/**',
    '!jest.config.js',
    '!webpack.*.js',
    '!**/vendor.*',
    '!src/index.js',
  ],
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)(spec|test).js?(x)'],
  globals: {
    ENABLE_MOCK_API: true,
  },
  automock: false,
};
