/**
 * Webpack configuration.
 */

// WordPress dependencies
const [
  scriptConfig,
  moduleConfig,
] = require("@wordpress/scripts/config/webpack.config");

// External dependencies
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = [
  {
    ...scriptConfig,
    entry: {
      ...scriptConfig.entry(),
      "cta/index": "./src/cta/index.js",
      "dashboard/index": "./src/dashboard/index.js",
      "eicons/index": "./src/eicons/index.js",
      "featuredpost/index": "./src/featuredpost/index.js",
      "imageupload/index": "./src/imageupload/index.js",
      "heroslider/index": "./src/heroslider/index.js",
      "newsticker/index": "./src/newsticker/index.js",
      "postslayout1/index": "./src/postslayout1/index.js",
      "postslayout2/index": "./src/postslayout2/index.js",
      "postslayout3/index": "./src/postslayout3/index.js",
      "postslayout4/index": "./src/postslayout4/index.js",
      "postslayout5/index": "./src/postslayout5/index.js",
      "postsslider/index": "./src/postsslider/index.js",
      "public/index": "./src/public/index.js",
      "service/index": "./src/service/index.js",
      "term/index": "./src/term/index.js",
    },
    optimization: {
      ...scriptConfig.optimization,
      minimizer: [
        ...scriptConfig.optimization.minimizer,
        new CssMinimizerPlugin(),
      ],
    },
    plugins: [...scriptConfig.plugins, new RemoveEmptyScriptsPlugin()],
  },
  moduleConfig,
];
