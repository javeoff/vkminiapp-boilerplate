// eslint-disable-next-line import/order
const path = require('path');

require('dotenv').config({
  path: path.resolve(process.cwd(), '.env.local'),
  defaults: path.resolve(process.cwd(), '.env'),
});
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  stats: { errorDetails: true },
  context: __dirname,
  watch: true,
  mode: process.env.NODE_ENV,
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.ejs',
      inject: 'body',
    }),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './**/*.{ts,tsx,js,jsx}',
      },
      typescript: {
        mode: 'write-references',
      },
      logger: {
        devServer: false,
      },
    }),
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new Dotenv(),
  ].filter(Boolean),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
      }),
    ],
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.tsx?$/, loader: 'babel-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: process.env.PORT,
  },
};
