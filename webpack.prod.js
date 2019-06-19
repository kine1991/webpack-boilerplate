const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const  OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(), // сжатие ccs
      new TerserPlugin() // сжатие js (main.js, vendor.js)
    ]
  },
  // optimization: {
  //   minimizer: [
  //     new OptimizeCssAssetsPlugin(),
  //     new TerserPlugin(),
  //     new HtmlWebpackPlugin({
  //       template: "./src/template.html",
  //       minify: {
  //         removeAttributeQuotes: true,
  //         collapseWhitespace: true,
  //         removeComments: true
  //       }
  //     })
  //   ]
  // },
  plugins: [
    new MiniCssExtractPlugin ({
      filename: '[name].[contentHash].css'
    }), 
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeAttributeQuotes: true
      }  // минификация index.html
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //3. Extract css into file
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  }
});
