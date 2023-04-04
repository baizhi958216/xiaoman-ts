const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  entry: "./src/app.ts",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  devServer: {
    port: 1988,
    proxy: {},
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
