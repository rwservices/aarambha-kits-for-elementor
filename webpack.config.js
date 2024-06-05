const [scriptConfig, moduleConfig] = require('@wordpress/scripts/config/webpack.config');
const { getWebpackEntryPoints } = require('@wordpress/scripts/utils/config');

// External dependencies
const path = require( 'path' );
const RemoveEmptyScriptsPlugin = require( 'webpack-remove-empty-scripts' );
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// JS Directory path.
const SRC_DIR 	= path.resolve( __dirname, 'src' );

const entry = {
	...getWebpackEntryPoints('script')(),
	public: SRC_DIR + '/public/index.js'
};

module.exports = [
	{
	...scriptConfig,
	entry: entry,
	optimization: {
		...scriptConfig.optimization,
		minimizer: [
			...scriptConfig.optimization.minimizer,
			new CssMinimizerPlugin()
		]
	},
	plugins: [
		...scriptConfig.plugins,
		new RemoveEmptyScriptsPlugin(),
	],
	},
	moduleConfig,
];