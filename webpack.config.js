var path = require("path");

module.exports = {
	entry: './src/entry.js',
	output: {
		path: path.resolve(__dirname, "dist"),  //  此路径是服务器的映射输出路径
		publicPath: "/dist/",  // 此路径是webpack后输出路径
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.css$|\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			}
		]
	},
	resolve: {
	  alias: {
		  'vue$': 'vue/dist/vue.js' // 其默认是vue.common.js, webpack别名功能将其指向vue.js
	  }
	}
}
