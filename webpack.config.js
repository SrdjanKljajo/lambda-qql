const nodeExternals = require('webpack-node-externals');
const serverlessWebpack = require('serverless-webpack');

module.exports = {
  entry: serverlessWebpack.lib.entries,
  mode: serverlessWebpack.lib.webpack.isLocal ? 'development' : 'production',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
  node: false,
  externals: [nodeExternals()],
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: ['.js'],
  },
  target: 'node',
};