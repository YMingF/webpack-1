const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require("./webpack.config.base.js"); //导入包含共有属性的js文件

module.exports = {
  ...base, //把base的所有属性抄到这里来
  mode: "development",
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // use: ["style-loader", "css-loader"],
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
