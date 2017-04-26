var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        './js/scripts.js',
        'webpack-dev-server/client?http://127.0.0.1:8080/public',
        'webpack/hot/only-dev-server'
        //'./src'
    ],
    output: {
        filename: 'scripts.min.js',
        path: path.join(__dirname , "js/"),
        //filename: 'bundle.js'
        //path: __dirname + '/js/',
        publicPath: "/js"
    },

    devtool: 'eval-source-map',
    devServer: {
        //contentBase: '/js',
        //watchContentBase: true
        watchOptions: {
            poll: true
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets:['react', 'es2015'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
};