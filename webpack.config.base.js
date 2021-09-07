const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.[contenthash].js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "我怕了",
      template: "src/assets/index.html",
    }),
  ],
};
