const nodeExternals = require('webpack-node-externals');
const path = require('path');

const outputPath = path.resolve(__dirname, 'dist');

const config = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: outputPath,
        filename: "index.bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(scss|css)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },

    mode: "development",
    devServer: {
        contentBase: outputPath,
        port: 4000,
    }
};

module.exports = config;
