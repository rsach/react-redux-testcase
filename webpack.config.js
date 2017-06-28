var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
	entry: __dirname+"/src/index.js",
	output: {
		path: __dirname+"dist/assets",
		filename:"bundle.js",
		publicPath: "assets"
	},
	devServer:{
		inline:true,
		contentBase: "./dist",
		port:3000
	},
	module:{
		loaders:[
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loaders: ['babel?' + JSON.stringify({
					presets: ['latest','stage-0','react']
				})]

			},
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				loaders:['json-loader'] 
			},
			{
				test:/\.css$/,
				loaders:['style-loader','css-loader','autoprefixer-loader']
			},
			{
				test: /\.scss/,
				loaders: ['style-loader','css-loader','autoprefixer-loader','sass-loader']
			}
		]
	},
	plugins: [
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.optimize\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorOptions: {discardComments: {removeAll:true}},
			canPrint: true
		})
	]

}