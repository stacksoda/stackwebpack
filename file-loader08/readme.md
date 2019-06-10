file-loader 用于处理文件
``` javascript
const path = require('path');
module.exports={
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}
```

## 安装步骤
初始化项目
`npm init -y`
安装webpack
`npm i webpack webpack-cli -D`
构建webpack.config.js文件

安装babel
`npm i babel-loader @babel/core @babel/preset-env -D`
构建babel配置文件
``` json
{
    "presets": [
        "@babel/preset-env",
    ]   
}
```

### 支持react
安装 react
`npm install --save react react-dom`
安装 babel的react模块
`npm i @babel/preset-react -D`
将preset加入 .babelrc
``` json
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```
### 支持less
安装 style-loader 和 css-loader 
`npm i style-loader css-loader -D`
安装 less和loader
`npm i less less-loader -D`
``` javascript
{
    test: /.less$/,
    use: [
        'style-loader',
        'css-loader',
        'less-loader'
    ]
}
```

### 支持图片
安装 fileloader
`npm i file-loader -D`
配置项
``` javascript
{
    test: /.(png|jpg|gif|jpeg)$/,
    use: 'file-loader'
}
```
## 文件监听
文件监听是在发现源码发生变化时，自动重新构建出新的输出文件
webpack开启监听模式，有两种方式
    启动webpack命令时 带上 --watch参数
    在配置webpack.config.js中设置watch: true
``` javascript
module.exports = {
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 3000,
        poll: 1
    },
    ...
}
```

## 热更新
webpack-dev-server
WDS不刷新浏览器
WDS不输出文件,而是放在内存中
使用HotModuleReplacementPlugin插件
安装webpackDevServer
`npm i -D webpack-dev-server`
在`package.json`中增加scripts语句
`    "dev": "webpack-dev-server --open" `

mode改为development

### webpack-dev-middleware
将webpack输出的文件传输给服务器
适用于灵活的定制场景


## 热更新的原理分析
Webpack Compile: 将JS编译成Bundle
HMR Server: 将热更新的文件输出给HMR Runtime
Bundle server: 提供文件在浏览器的访问
HMR Runtime: 会被注入到浏览器，更新文件的变化

bundle.js： 构建输出的文件

