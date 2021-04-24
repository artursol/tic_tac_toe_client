const path = require('path');
const nodeExternals = require('webpack-node-externals');

const environment = process.env.NODE_ENV;
const outputPath = path.resolve(__dirname, 'build');
const entry = { server: './server.js' };

const config = {
  entry,
  output: {
    path: outputPath,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },

  target: 'node',
  mode: environment,
  externals: [nodeExternals()],
  devServer: {
    contentBase: outputPath,
    port: 5000,
  },
};

module.exports = config;
