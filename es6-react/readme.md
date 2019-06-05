资源解析 ES6
使用babel-loader
``` javascript
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    }
}
```

babel的配置文件是 .babelrc
``` json
{
    "presets": [    // babel plugins的集合
        "@babel/preset-env"     
    ],
    "plugins": [    // babel 的一项功能
        "@babel/proposal-class-properties"
    ]
}
```

安装babel
npm i @babel/core @babel/preset-env babel-loader -D
npm install @babel/core @babel/preset-env babel-loader --save-dev
创建 .babelrc
``` json
{
    "presets": [
        "@babel/preset-env"
    ]
}
```

配置 webpack.config.js

解析React JSX
npm i react react-dom @babel/preset-react -D
``` json
{
    "presets":[
        "@babel/preset-env",
        "@babel/preset-react"   // --> 增加React的babel preset配置
    ],
    "plugins": [
        "@babel/proposal-class-properties"
    ]
}
```