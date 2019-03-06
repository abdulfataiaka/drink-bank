// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",

  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],

  coverageReporters: [
    "json",
    "text",
    "lcov",
    "clover"
  ],

  globals: {},

  moduleDirectories: [
    "node_modules"
  ],

  moduleFileExtensions: [
    "js",
    "jsx"
  ],

  // A map from regular expressions to module names that allow to stub out resources with a single module
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/specs/support/mocks/styleMock.js"
  },

  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  modulePathIgnorePatterns: [],

  roots: [
    "<rootDir>",
    "<rootDir>/specs"
  ],

  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: [
    "<rootDir>/specs/support/enzyme.js",
    "<rootDir>/specs/support/jsdom.js"
  ],

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  // snapshotSerializers: [],

  // The test environment that will be used for testing
  testEnvironment: "node",

  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/specs/**/*.spec.js?(x)"
  ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
};
