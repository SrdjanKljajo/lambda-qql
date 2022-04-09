const slsw = require(`serverless-webpack`)
const nodeExternals = require(`webpack-node-externals`)

module.exports = {
  mode: slsw.lib.webpack.isLocal ? `development` : `production`,
  entry: slsw.lib.entries,
  target: `node`,
  externals: [nodeExternals()],
  stats: {
    colors: true,
    reasons: false,
    chunks: false
  }
}