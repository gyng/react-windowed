// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname),
  entry: './example.jsx',
  output: {
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, '..', 'src'),
          path.join(__dirname),
        ],
        query: { presets: ['airbnb'] },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1',
          'postcss-loader?sourceMap=inline',
        ],
        include: [
          path.resolve(__dirname, '..', 'src'),
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, '..'),
      path.resolve(__dirname, '..', 'node_modules'),
    ],
    alias: { 'react/lib/ReactMount': 'react-dom/lib/ReactMount' },
  },
};
