const fs = require('fs')
const path = require('path')

function nodeModules() {
  return fs.readdirSync('node_modules')
           .filter(dir => ['.bin'].indexOf(dir) === -1)
           .reduce((modules, m) => {
             modules[m] = 'umd ' + m
             return modules
           }, {})
}

module.exports = {
  entry: './lib/index.js',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  externals: nodeModules()
}
