module.exports = {
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  testRegex: "\\.(test|spec)\\.ts$",
  moduleFileExtensions: ["ts", "js"],
  globals: {
    "ts-jest": {
      diagnostics: true
    }
  },
  testEnvironment: "node"
};
