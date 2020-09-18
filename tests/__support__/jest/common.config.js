const path = require("path");
const ignorePatterns = ["/coverage/", "/node_modules/", "/tmp/", "<rootDir>/index.css", "<rootDir>/index.js"];

module.exports = {
  clearMocks: true,
  coveragePathIgnorePatterns: [...ignorePatterns, "/test"],
  rootDir: path.join(__dirname, "../../../"),
  snapshotSerializers: ["jest-snapshot-serializer-function-name"],
  testPathIgnorePatterns: ignorePatterns,
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  watchPathIgnorePatterns: ignorePatterns
};
