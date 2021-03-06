var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', 'css']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'istanbul-instrumenter-loader'
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.s?css$/,
        loaders: ['css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]&sourceMap', 'postcss']
      },
      {
        test: /\.scss$/,
        loaders: ['sass']
      },
    ]
  },
  target: 'node',
  externals: [nodeExternals({
    whitelist: [/react-toolbox/]
  })],
  devtool: 'inline-cheap-module-source-map'
};
