let WebpackBuildNotifierPlugin = require('webpack-build-notifier');
let WebpackNotifierPlugin = require('webpack-notifier');
let webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist',
    publicPath: 'dist/'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /bootstrap\/js\//,
        loader: 'imports?jQuery=jquery'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.svg$/,
        loader: 'url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]'
      },
      {
        test: /\.woff$/,
        loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]'
      },
      {
        test: /\.woff2$/,
        loader: 'url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]'
      },
      {
        test: /\.[ot]tf$/,
        loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]'
      },
      {
        test: /\.eot$/,
        loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]'
      }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    new WebpackNotifierPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  devtool: 'source-map',
}
