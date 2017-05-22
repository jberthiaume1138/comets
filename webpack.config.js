var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const VENDOR_LIBS = [
	'react', 'react-dom', 'react-router'
];

module.exports = {

	entry: {
		bundle: './src/client.js',
		vendor: VENDOR_LIBS
	},

	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].[hash].js'
	},

	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				test: /\.(css|scss)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'
				}),
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: { limit: 40000 }
					},
					{
						loader: 'image-webpack-loader',
						options: {}
					}
				]
			}
		]
	},

	devtool: 'eval-source-map',

	devServer: {
		historyApiFallback: true
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest']
		}),
		new ExtractTextPlugin({
			filename: 'style.[chunkhash].css'
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	]
};
