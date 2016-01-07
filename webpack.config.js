
module.exports = {
	entry:'./App.js',
	output:{
		path: './',
		filename:'deploy.js'
	},
	devServer:{
		inline:true,
		port:3000
	},
    devtool: "#eval",
	module:{
		loaders:[
			{
				test:/\.js/,
				exclude: /node_modules/,
				loader:'babel',
				query:{
					presets: ['es2015','react']
				}
			}
		]
	}
}