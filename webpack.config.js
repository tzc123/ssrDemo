const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: path.join(__dirname, 'src/home.js')
  },
  output: {
    path: path.join(__dirname, 'ssr'),
    filename: '[name].js',
    libraryTarget: 'commonjs2' 
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["react"]
        }
      }
    ]
  },
  target: 'node'
}