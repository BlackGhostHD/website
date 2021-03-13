const path = require('path')
const rootPath = path.resolve(__dirname, '../src')

module.exports = ({ config }) => {
	config.module.rules.push({
		test: /\.scss$/,
		use: [
			'vue-style-loader',
			'css-loader',
			{
				loader: 'sass-loader',
				options: {
					additionalData: `@import "@/styles/main.scss";`
				}
			}
		],
	})

	config.resolve.alias['@'] = rootPath
	config.resolve.alias['~'] = rootPath

	return config
}
