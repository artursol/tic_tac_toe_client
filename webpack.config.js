const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const environment = process.env.NODE_ENV;
const outputPath = path.resolve(__dirname, environment === 'production' ? 'build' : 'dist');
const entry = { index: './src/index.js' };

const config = {
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: '' },
      ],
    }),
  ],

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
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  target: 'web',
  mode: environment,
  devServer: {
    contentBase: outputPath,
    port: 4000,
  },
};

module.exports = config;
