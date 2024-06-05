const [scriptConfig, moduleConfig] = require('@wordpress/scripts/config/webpack.config');
const { getWebpackEntryPoints } = require('@wordpress/scripts/utils/config');

// External dependencies
const path = require('path');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// JS Directory path.
const SRC_DIR = path.resolve(__dirname, 'src');

const entry = {
	...getWebpackEntryPoints('script')(),
	public: SRC_DIR + '/public/index.js',
	cta: SRC_DIR + '/cta/index.js',
	eicons: SRC_DIR + '/eicons/index.js',
	featuredpost: SRC_DIR + '/featuredpost/index.js',
	dashboard: SRC_DIR + '/dashboard/index.js',
	heroslider: SRC_DIR + '/heroslider/index.js',
	newsticker: SRC_DIR + '/newsticker/index.js',
	postslayout1: SRC_DIR + '/postslayout1/index.js',
	postslayout2: SRC_DIR + '/postslayout2/index.js',
	postslayout3: SRC_DIR + '/postslayout3/index.js',
	postslayout4: SRC_DIR + '/postslayout4/index.js',
	postslayout5: SRC_DIR + '/postslayout5/index.js',
	postsslider: SRC_DIR + '/postsslider/index.js',
	service: SRC_DIR + '/service/index.js',
	term: SRC_DIR + '/term/index.js'
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