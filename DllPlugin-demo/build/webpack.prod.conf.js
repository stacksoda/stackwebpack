'use strict'
const path = require('path');
const webpack = require('webpack');
const prodConf = require('../config').build;
const baseConf = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 资源路径
const assetsPath = function (dir) {
    return path.posix.join(prodConf.assetsSubDirectory, dir)
}
// webpack配置合并模块
const merge = require('webpack-merge');
const prod = merge({}, baseConf, {
    output: {
        // 输出文件位置
        path: path.resolve(__dirname, '../dist'),
        // html引用资源路径
        publicPath: prodConf.publicPath,

        filename: assetsPath('js/[name].[chunkhash].js'),

        chunkFilename: assetsPath('js/[name].[chunkhash].js')
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Custom template',
        template: 'test.html'
    }
    )]
});

module.exports = prod;
