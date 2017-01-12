var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
	devtool: [],
	plugins: [
		new ExtractTextPlugin('bundlestyle.css'),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	]
};

// note this config is for webpack v1.x.y.z only
