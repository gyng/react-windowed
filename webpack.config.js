const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const srcFolder = path.join(__dirname, 'src', 'components');
const components = fs.readdirSync(srcFolder);

const files = [];
const entries = {};
components.forEach((component) => {
  const name = component.split('.')[0];
  const file = `./src/components/${name}`;
  files.push(file);
  entries[name] = file;
});

module.exports = {
  entry: entries,
  output: {
    filename: '[name].js',
    path: './lib/components/',
    libraryTarget: 'commonjs2',
  },

  externals: {
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: [
          /\/node_modules\//,
        ],
        loader: 'babel-loader',
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
          path.resolve(__dirname, 'src'),
        ],
      },
    ],
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // defaults to development
    }),

    (process.env.NODE_ENV === 'production'
      ? new webpack.optimize.UglifyJsPlugin()
      : new webpack.BannerPlugin({ banner: 'run with NODE_ENV=production to minify' })),
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: ['node_modules', 'src'],
  },

  devtool: 'cheap-eval-source-map',

  devServer: {
    contentBase: 'app/ui/www',
    historyApiFallback: true,
    stats: 'minimal',
  },
};
