var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WriteFilePlugin = require('write-file-webpack-plugin');

var debug = process.env.NODE_ENV !== "production";

module.exports = {
	context: path.join(__dirname, '/public'),
	entry: './src/js/client.js',
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.(css|scss)$/,
				loader: ExtractTextPlugin.extract(
					'style-loader',
					'css-loader!sass-loader')
			}
		]
	},
	output: {
		path: path.join(__dirname, '/public/src/build'),
		filename: 'client.min.js'
	},

	devServer:
		debug ? [
			{
				outputPath: path.join(__dirname, '/public/src/build')
			}
		] : [],

	plugins:
		debug ? [
			new ExtractTextPlugin('bundlestyle.css'),
			new WriteFilePlugin()
		] : [
			new ExtractTextPlugin('bundlestyle.css')
		]
};

// note this config is for webpack v1.x.y.z only
