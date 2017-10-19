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
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  bail: false,
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
}
