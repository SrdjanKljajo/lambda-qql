const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: slsw.lib.entries,
    target: 'node',
    mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
    optimization: {
        minimize: false,
    },
    performance: {
        hints: false,
    },
    devtool: 'nosources-source-map',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: {
                                    node: true,
                                },
                            },
                        ],
                    ],
                },
                include: [__dirname],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
    output: {
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js',
    },
};