const path = require('path');
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
  }
};