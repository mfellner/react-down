const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
        options: {
          presets: ['react', ['es2015', {modules: false}], 'stage-2'],
          babelrc: false
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader'
        })
      },
      {
        test: /\.json/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('index.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.ejs',
      inject: false
    })
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
}
