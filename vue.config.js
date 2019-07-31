const path = require("path")
// path拼接
const resolve = function (dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	configureWebpack: {
		plugins: []
	},
	chainWebpack: config => {
		const svgRule = config.module.rule("svg")
		const imagesRule = config.module.rule("images")
		// 清除loader，这样做的目的：防止loader 会附加在该规则现有的 loader 之后
		svgRule.uses.clear()
		// 添加要替换的loader
		svgRule.include
			.add(resolve("src/icons"))
			.end()
			.use("svg-sprite-loader")
			.loader("svg-sprite-loader")
			.options({
        symbolId: "icon-[name]"
			});
		// imagesRule
		imagesRule
		.test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
		.exclude.add(resolve("src/icons"))
		.end();
	},

	devServer: { // dev解决跨域
		open: false,
		host: "0.0.0.0",
		port: 8080,
		https: false,
		proxy: {
			"/api": {
				target: "http://nine-bot-test.com", // 代理到后端服务器
				changeOrigin: true,
				pathRewrite: {
					'api': ''
				},
				logLevel: "debug"
			},
			disableHostCheck: true
		}
	}
}