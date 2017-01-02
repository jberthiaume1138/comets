var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: path.join(__dirname, '/public'),
	entry: './src/js/client.js',
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	},
	output: {
		path: path.join(__dirname,  '/public/src'),
		filename: 'client.min.js'
	}
};
