module.exports = {
	devServer:{
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:9527',
				ws: true,
				changeOrigin: true,
				pathRewrite:{
					'^/api': ""
				}
			 },
		}
	}
}