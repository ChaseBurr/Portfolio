const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
     mode: process.env.production_mode,
     entry: path.resolve(__dirname, "src/index.js"),
     module: {
          rules: [
               {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                         loader: "babel-loader",
                         options: {
                              presets: ["@babel/preset-env"],
                         },
                    },
               },
               {
                    test: /\.s[a|c]ss$/i,
                    use: [
                         { loader: "style-loader" },
                         {
                              loader: "css-loader",
                              options: {
                                   modules: {
                                        localIdentName: "[local]",
                                   },
                              },
                         },
                         {
                              loader: "sass-loader",
                         },
                    ],
               },
               {
                    test: /\.css$/i,
                    use: [
                         "style-loader", // inject into DOM
                         "css-loader", //Turns into commonjs
                    ],
               },
               {
                    test: /\.(png|gif)$/i,
                    loader: "file-loader",
                    options: {
                         name: "[name].[ext]",
                         outputPath: "images/",
                         publicPath: "images/",
                    },
               },
          ],
     },
     output: {
          path: path.resolve(__dirname, "build"),
          filename: "main.[contenthash].js",
     },
     plugins: [
          new HtmlWebpackPlugin({
               template: path.resolve(__dirname, "public/index.html"),
               filename: "index.html",
          }),
          new Dotenv(),
     ],
};
