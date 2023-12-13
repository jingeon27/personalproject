module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  modulePaths: ["<rootDir>/src/"],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
  testMatch: ["<rootDir>/src/**/*.test.(js|jsx)"],
  collectCoverageFrom: ["src/**/*.{js,jsx}", "!src/**/*.spec.{js,jsx}"],
  setupFilesAfterEnv: ["./jest.setup.js"],
  testTimeout: 10000,
};
