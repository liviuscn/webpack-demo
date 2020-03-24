const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        hot: true,
        proxy: {
            "/v1/*": "http://debug.aierp.cn:8085/",
            "/share-oss/*": "http://debug.aierp.cn:8085/"
        }
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});