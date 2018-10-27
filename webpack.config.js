const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'app': './src/app.module.js',
    'vendor': './src/vendor.module.js'
  },
  output: {
    filename: 'libs/[name].bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      },
      {test: /\.html$/, loader: 'html-loader'},
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: './'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'To-do-list',
      template: './src/index.html',
      inject: "body"
    }),
  ]
};