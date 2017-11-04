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
    '!gqlserver/server.js',
    '!gqlserver/src/lib/**',
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
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
}
