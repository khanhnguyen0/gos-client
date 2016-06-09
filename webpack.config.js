var path = require ('path');
var webpack = require('webpack');

module.exports = {
            entry: [
              'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
              'webpack/hot/dev-server',
              './source/App.js'
            ],
            output: {
              path: __dirname,
              filename: "bundle.js"
}, module: {
              loaders: [{
                test: /\.jsx?$/,
                loaders: ['react-hot','babel-loader?presets[]=es2015,presets[]=react'],
                exclude: /node_modules/

}] },
plugins: [
  new webpack.HotModuleReplacementPlugin()
]
};
