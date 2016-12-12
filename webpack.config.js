var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCSS = new ExtractTextPlugin('target/style.css');
var extractHTML = new ExtractTextPlugin('target/indexe.html');

module.exports = {
	entry: './src/main.js',
	output: {
		publicPath:"/wp-content/themes/theme/",
		filename: 'target/bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				exclude: /(node_modules|bower_components)/,
				loaders: [
					'file?hash=sha512&digest=hex&name=target/images/[hash].[ext]',
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
			    test: /index\.html$/, 
				loader: extractHTML.extract("html-loader")
			},
			{
				test: /main\.scss$/,
				loader: extractCSS.extract("style-loader", "css-loader!sass-loader")
			}
		]
	},
	plugins: [
		extractCSS,
		extractHTML
    ]
};

/*
*/
