// module.exports = {
//   collectCoverage: true,
//   collectCoverageFrom: ["src/**/*.{js,jsx}"],
//   coverageDirectory: "coverage",
//   testEnvironment: "jsdom",
//   setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
// };

module.export = {
  roots: ["<rootDir>/src"],
  transform: {
    "\\.(js|jsx)?$": "babel-jest",
  },
  testMatch: ["<rootDir>/src/**/>(*.)test.{js, ts, jsx, tsx}"],
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["/node_modules/", "/public/"],
  setupFilesAfterEnv: [
    "jest-dom/extend-expect",
    "react-testing-library/cleanup-after-each",
  ],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
  },
};
