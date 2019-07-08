'use strict'
const path = require('path');
const webpack = require('webpack');
const devConf = require('../config').dev;
const baseConf = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin')

//一个webpack配置合并模块,可简单的理解为与Object.assign()功能类似！
const merge = require("webpack-merge")

const dev = merge(baseConf, {
    output: {
        filename: '[name]-[hash].js',
        publicPath: devConf.publicPath
    },
    devServer: {
        hot: true,
        inline: true,
        open: true,
        historyApiFallback: true,
        host: devConf.host,
        port: devConf.port
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: 'Custom template',
                template: 'index.html'
            }
        )
    ]
})

module.exports = dev;
