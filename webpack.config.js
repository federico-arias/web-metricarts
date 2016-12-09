var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './main.js',
	output: {
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file?name=/fonts2/[name].[ext]'
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=[hash].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
				]
			},
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['es2015' ]
				}
			},
			{
				test: /main\.scss$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
			}
		]
	},
	plugins: [
        new ExtractTextPlugin("style.css")
    ]
};
