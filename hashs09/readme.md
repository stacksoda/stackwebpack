什么是文件指纹？
打包后输出的文件名后缀
文件指纹的用处
版本的管理，对于没有修改的文件可以持续使用缓存

## 文件指纹的类型
`Hash` 和整个项目的构建相关,只要项目文件有修改,整个项目构建的`hash`值就会更改
`Chunkhash` 和webpack 打包的 chunk有关, 不同的 entry 会生成不同的 chunkhash 值
`Contenthash` 根据文件内容来定义hash 文件内容不变, 则contenthash 不变
三种hash随着文件的改动发生不一样的变动 hash 的变动频率最高 Chunkhash针对多页面应用 Contenthash的变动频率最低

## JS的文件指纹设置
设置output的filename, 使用[chunkhash]
``` javascript
module.exports = {
    entry: {
        app: './src/app.js',
        search: './src/search.js'
    },
    output: {
        filename: '[name][chunkhash:8].js',
        path: __dirname + '/dist'
    }
}
```

## CSS的文件指纹设置
设置 MiniCssExtractPlugin 的filename, 使用[contenthash]
``` javascript
module.exports = {
    entry: {
        app: './src/app.js',
        search: './src/search.js'
    },
    output: {
        filename: `[name][chunkhash:8].js`,
        path: __dirname + '/dist'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `[name][contenthash:8].css`
        })
    ]
}
```
## 图片的文件指纹设置
设置 file-loader 的name使用 [hash]
``` javascript
module.exports = {
    entry: {
        app: './src/app.js',
        search: './src/search.js'
    },
    output: {
        filename: `[name][chunkhash:8].js`,
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test:/\.(png|svg|jpg|gif)$/,
                use[{
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name][hash:8].[ext]'
                    }
                }]
            }
        ]
    }
}
```
## 占位符
[ext]   资源后缀名
[name]  文件名称
[path]  文件的相对路径
[folder]    文件所在的文件夹
[contenthash]   文件的内容hash默认是md5生成
[hash]  文件内容的Hash 默认是md5生成
[emoji] 一个随机的指代文件内容的emoj

## chunkhash无法与热更新一起使用
创建`webpack.dev.js`和 `webpack.prod.js`
``` javascript
"build": "webpack --config webpack.prod.js" //生产环境
"dev": "webpack --config webpack.dev.js"  //开发环境
```