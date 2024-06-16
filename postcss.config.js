/** @type {import('postcss-load-config').Config} */

const config = {
    plugins: [
      require('postcss-nested'),
      require('postcss-simple-vars'),
      require('postcss-mixins'),
      require('postcss-extend-rule'),
      /* remove autoprefixer if you had it here, it's part of postcss-preset-env */
		  require('postcss-preset-env')({
        //https://github.com/csstools/postcss-plugins/blob/main/plugin-packs/postcss-preset-env/FEATURES.md
		  })
    ]
  }
  
  module.exports = config