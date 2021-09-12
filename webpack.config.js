const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    globalObject: "this",
    library: {
      name: "arachnae-native",
      type: "umd",
    },
    path: path.resolve(__dirname, "dist"),
  },
  externals: {
    react: "react",
    "react-native": "react-native",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        resolve: {
          extensions: [".js", ".jsx"],
        },
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            presets: ["module:metro-react-native-babel-preset"],
          },
        },
      },
    ],
  },
  resolve: {
    modules: [path.join(__dirname, "node_modules")],
  },
};
