require('dotenv').load();
var env = process.env.NODE_ENV;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var n = (n) => new ExtractTextPlugin(n);
var ext = env === 'prod' ? '.php' : '.html';
var extractCSS = n('style.css');
var extractHTML = n('[name]' + ext);


module.exports = {
	entry: {
		single:'./src/single.js',
		//comments:'./src/comments.js',
		index:'./src/index.js'
	},
	output: {
		publicPath: env === 'prod' ? "/wp-content/themes/theme/" : "./",
		path: __dirname + "/target",
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				exclude: /(node_modules|bower_components)/,
				loaders: [
					'file?hash=sha512&digest=hex&name=images/[hash].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
				]
			},
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=fonts/[name].[ext]'
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
			    test: /\.html$/, 
				loader: extractHTML.extract("html-loader")
			},
			{
				test: /\.scss$/,
				loader: "style!css-loader!sass-loader"
			}/*,
			{
				test: /\.scss$/,
				loader: extractCSS.extract("style-loader", "css-loader!sass-loader")
			}*/
		]
	},
	plugins: [
		//extractCSS,
		extractHTML
		/*,
		new HtmlWebpackPlugin({
			title: '[name]',
			filename: '[name].html',
			template: 'src/index.html'
		})
		*/
	],
	devServer: {
		contentBase: 'target/'
	}
};

