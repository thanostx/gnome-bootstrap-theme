const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractStyles = new ExtractTextPlugin('[name].css');

module.exports = {
  entry: {
    'deneb': './src/main',
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js'
  },

  resolve: {
    extensions: ['*', '.js', '.css', 'scss']
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use:['babel-loader']
      },
      {
        test: /\.scss$/,
        use: extractStyles.extract({
            fallback:'style-loader',
            use:['css-loader','sass-loader']
        })
      },
      {
        test: /\.(jpeg|png|gif|svg)?$/i,
        use:['file-loader?name=[name].[ext]']
      }
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    extractStyles
  ]
}
