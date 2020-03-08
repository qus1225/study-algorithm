module.exports = {
  testRegex: "\\.(test|spec)\\.js$",
  moduleFileExtensions: ["js"],
  globals: {
    "ts-jest": {
      diagnostics: true
    }
  },
  testEnvironment: "node"
};
