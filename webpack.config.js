const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: slsw.lib.entries,
  externalsPresets: { node: true },
  mode: 'none',
  externals: [nodeExternals()]
};