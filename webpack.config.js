module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015' ]
        }
      }, {
        test: /\.scss$/,
        loader: 'style!css!sass!'
	  },
	  {
		  test: /\.(eot|svg|ttf|woff|woff2)$/,
		  loader: 'file?name=/fonts/b[name].[ext]'
	  },
	  {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  }
};
