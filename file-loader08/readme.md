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
