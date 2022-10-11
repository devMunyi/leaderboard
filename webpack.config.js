const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devServer: {
    static: './dist',
    hot: false, // optional, but you must not set both hot and liveReload to true
    liveReload: true, // allow  browser automatic refresh on file changes
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      // // set up bootstrap compiler
      // {
      //   test: /\.(scss)$/,
      //   use: [
      //     {
      //       loader: 'style-loader', // inject CSS to page
      //     },
      //     {
      //       loader: 'css-loader', // translates CSS into CommonJS modules
      //     },
      //     {
      //       loader: 'postcss-loader', // Run post css actions
      //       options: {
      //         plugins: function () {
      //           // post css plugins, can be exported to postcss.config.js
      //           return [require('precss'), require('autoprefixer')];
      //         },
      //       },
      //     },
      //     {
      //       loader: 'sass-loader', // compiles Sass to CSS
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  optimization: {
    runtimeChunk: 'single',
  },
};
