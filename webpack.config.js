/**
 * Webpack configuration.
 */

const path = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const OptimizeCssAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const cssnano = require( 'cssnano' ); // https://cssnano.co/
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const UglifyJsPlugin = require( 'uglifyjs-webpack-plugin' );
const CopyPlugin = require('copy-webpack-plugin'); // https://webpack.js.org/plugins/copy-webpack-plugin/
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );

// JS Directory path.
const JS_DIR = path.resolve( __dirname, 'assets/src/js' );
const IMG_DIR = path.resolve( __dirname, 'assets/src/images' );
const LIB_DIR = path.resolve( __dirname, 'assets/src/library' );
const BUILD_DIR = path.resolve( __dirname, 'assets/build' );

const entry = {
	main: JS_DIR + '/main.js',
	public: JS_DIR + '/public.js',
	heroslider: JS_DIR + '/heroslider.js',
	newsticker: JS_DIR + '/newsticker.js',
	postsslider: JS_DIR + '/postsslider.js',
	postslayout1: JS_DIR + '/postslayout1.js',
	postslayout2: JS_DIR + '/postslayout2.js',
	postslayout3: JS_DIR + '/postslayout3.js',
	postslayout4: JS_DIR + '/postslayout4.js',
	postslayout5: JS_DIR + '/postslayout5.js',
	featuredpost: JS_DIR + '/featuredpost.js',
	imageupload: JS_DIR + '/imageupload.js',
	cta: JS_DIR + '/cta.js',
	service: JS_DIR + '/service.js',
	eicons: JS_DIR + '/eicons.js',
	term: JS_DIR + '/term.js'
};

const output = {
	path: BUILD_DIR,
	filename: 'js/[name].js'
};

/**
 * Note: argv.mode will return 'development' or 'production'.
 */
const plugins = ( argv ) => [
	new CleanWebpackPlugin( {
		cleanStaleWebpackAssets: ( 'production' === argv.mode  ) // Automatically remove all unused webpack assets on rebuild, when set to true in production. ( https://www.npmjs.com/package/clean-webpack-plugin#options-and-defaults-optional )
	} ),
	
	new MiniCssExtractPlugin( {
		filename: 'css/[name].css'
	} ),
	
	new CopyPlugin( {
		patterns: [
			{ from: LIB_DIR, to: BUILD_DIR + '/library' }
		]
	} ),
	
	new DependencyExtractionWebpackPlugin( {
		injectPolyfill: true,
		combineAssets: true,
	} )
];

const rules = [
	{
		test: /\.js$/,
		include: [ JS_DIR ],
		exclude: /node_modules/,
		use: 'babel-loader'
	},
	{
		test: /\.(scss|css)$/,
		exclude: /node_modules/,
		use: [
			MiniCssExtractPlugin.loader,
			'css-loader',
			'sass-loader',
		]
	},
	{
		test: /\.(png|jpg|svg|jpeg|gif|ico)$/,
		use: {
			loader: 'file-loader',
			options: {
				name: 'images/[name].[ext]',
				publicPath: 'production' === process.env.NODE_ENV ? '../' : '../../'
			}
		}
	},
	{
		test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
		exclude: [ IMG_DIR, /node_modules/ ],
		use: {
			loader: 'file-loader',
			options: {
				name: '[path][name].[ext]',
				publicPath: 'production' === process.env.NODE_ENV ? '../' : '../../'
			}
		}
	}
];

/**
 * Since you may have to disambiguate in your webpack.config.js between development and production builds,
 * you can export a function from your webpack configuration instead of exporting an object
 *
 * @param {string} env environment ( See the environment options CLI documentation for syntax examples. https://webpack.js.org/api/cli/#environment-options )
 * @param argv options map ( This describes the options passed to webpack, with keys such as output-filename and optimize-minimize )
 * @return {{output: *, devtool: string, entry: *, optimization: {minimizer: [*, *]}, plugins: *, module: {rules: *}, externals: {jquery: string}}}
 *
 * @see https://webpack.js.org/configuration/configuration-types/#exporting-a-function
 */
module.exports = ( env, argv ) => ({
	
	entry: entry,
	
	output: output,
	
	/**
	 * A full SourceMap is emitted as a separate file ( e.g.  main.js.map )
	 * It adds a reference comment to the bundle so development tools know where to find it.
	 * set this to false if you don't need it
	 */
	//devtool: 'source-map',
	
	module: {
		rules: rules,
	},
	
	optimization: {
		minimizer: [
			new OptimizeCssAssetsPlugin( {
				cssProcessor: cssnano
			} ),
			
			new UglifyJsPlugin( {
				cache: false,
				parallel: true,
			} )
		]
	},
	
	plugins: plugins( argv ),
	
	externals: {
		jquery: 'jQuery'
	}
});
