var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

      // add the jshint loader
  module:{
    rules:[{
        test:/\.js$/,  // run the loader on all .js files
        exclude: /node_modules/, // ignore all files in the node_modules folder
        use: 'jshint-loader'
    }]
}
};