// postcss.config.js

// module.exports = {
//     processCssUrls: true,
//     plugins: [
//         // require('postcss-nested-ancestors'),
//         // require("postcss-preset-env"),
//         require("postcss-import"),
//         require("tailwindcss"),
//         require("autoprefixer"),
//         // require("postcss-nested"),
//     ],
// };

// Import the required plugin
import postcssImport from 'postcss-import'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// Check if the plugin is installed
try {
  require.resolve('postcss-import');
} catch (e) {
  console.error('The postcss-plugin is not installed.');
}

const { resolve, sep } = require('path')
import url from 'postcss-url'
const plug = [
  postcssImport,
  tailwindcss,
  autoprefixer
]

// find theme dir name
function getThemDir() {
  const _path = process.cwd().split(sep)
  return _path[_path.length - 1]
}

// only for editor css
// if (process.env.IS_EDITOR) {
//   const options = {
//     url: ({ url }) =>
//       // replace assets base
//       url.replace('/assets', `/wp-content/themes/${getThemDir()}/assets`),
//   }
//   plug.push(url(options))
// }

// module.exports = {
//   // processCssUrls: true,
//   plugins: [
//     plug
// 	]
// };

module.exports = {
	//processCssUrls: true,
	plugins: [
    postcssImport,
    tailwindcss,
    autoprefixer
		// 'postcss-import': {},
    // 'tailwindcss': {},
    // 'autoprefixer'
  ]
};
