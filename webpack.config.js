// var webpack = require('webpack');

module.exports = {  
	entry: './src/app.ts',
	output: {
		filename: 'game/js/bundle.js'
	},
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
	},
	node : { fs: 'empty' },
	module: {
		loaders: [
			{test: /\.json$/, loader: 'json-loader'},
	  		{test: /\.ts$/, loader: 'ts-loader'}
		]
	}/*,
	plugins: [
	    new webpack.optimize.UglifyJsPlugin({minimize: true})
	]*/
}