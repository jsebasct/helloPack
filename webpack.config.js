var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        './js/scripts.js',
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server'
        //'./src'
    ],

    output: {
        //path: path.join(__dirname , "public"),
        //filename: 'bundle.js'
        path: __dirname + '/js',
        filename: 'scripts.min.js'
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