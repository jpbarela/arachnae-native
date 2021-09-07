const config = {
  preset: "react-native",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  transform: {
    "^.+\\.jsx?$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
  },
};

module.exports = config;
