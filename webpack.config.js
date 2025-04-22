/**
 * Webpack configuration.
 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

// Directory paths
const CSS_DIR = path.resolve(__dirname, 'assets/src/css');
const JS_DIR = path.resolve(__dirname, 'assets/src/js');
const IMG_DIR = path.resolve(__dirname, 'assets/src/images');
const LIB_DIR = path.resolve(__dirname, 'assets/src/library');
const BUILD_DIR = path.resolve(__dirname, 'assets/build');

const entry = {
  public: path.join(JS_DIR, 'public.js'),
  dashboard: path.join(JS_DIR, 'dashboard.js'),
  term: path.join(JS_DIR, 'term.js'),
  widget: path.join(JS_DIR, 'widget.js'),
  editor: path.join(CSS_DIR, 'editor.css'),
};

const output = {
  path: BUILD_DIR,
  filename: 'js/[name].js',
  assetModuleFilename: 'images/[name][ext][query]',
};

const plugins = (argv) => [
  new CleanWebpackPlugin({
    cleanStaleWebpackAssets: argv.mode === 'production',
    protectWebpackAssets: false,
  }),
  new RemoveEmptyScriptsPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/[name].css',
    chunkFilename: 'css/[id].css',
  }),
  new DependencyExtractionWebpackPlugin({
    injectPolyfill: true,
    combineAssets: true,
  }),
  new CopyPlugin({
    patterns: [
      {
        from: IMG_DIR,
        to: 'images',
        noErrorOnMissing: true,
      },
      {
        from: LIB_DIR,
        to: 'library',
        noErrorOnMissing: true,
      },
    ],
  }),
];

const rules = [
  {
    test: /\.js$/,
    include: [JS_DIR],
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    },
  },
  {
    test: /\.(sc|sa|c)ss$/,
    exclude: /node_modules/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              require('autoprefixer')({
                overrideBrowserslist: ['last 2 versions', '> 1%', 'ie >= 11']
              })
            ],
          },
        },
      },
      'sass-loader',
    ],
  },
];

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: entry,
    output: output,
    devtool: isProduction ? false : 'source-map',
    module: {
      rules: rules,
    },
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            sourceMap: !isProduction
          }
        }),
        new CssMinimizerPlugin(),
      ],
    },
    plugins: plugins(argv),
    externals: {
      jquery: 'jQuery',
    },
  };
};