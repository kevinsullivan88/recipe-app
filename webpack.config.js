// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//   entry: "./src/index.js",
//   mode: "development",
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "./dist"),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: { presets: ["@babel/env", "@babel/preset-react"] },
//         },
//       },
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },
//   devtool: "inline-source-map",
//   devServer: {
//     static: {
//       publicPath: '/dist',
//     },
//     port: 8080,
//     hot: true,
//     proxy: [
//       {
//         context: ["/"],
//         target: "http://localhost:3000",
//         changeOrigin: true,
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: "index.html",
//       template: './src/index.html'
//     }),
//   ]
// };

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
          }
        }
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Development',
      template: './src/index.html'
    })
  ],
  devServer: {
    static: {
      publicPath: '/build',
      directory: path.resolve(__dirname, 'build')
    },
    port: 8080,
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:3000',
      }
    ]
  },
}