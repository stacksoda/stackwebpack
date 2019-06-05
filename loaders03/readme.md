webpack只支持js和json两种文件类型，通过loaders去支持其他文件类型并把它们转化成有效的模块，并且可以添加到依赖图中。
loaders本身是一个函数 它接收源代码作为参数 返回转换的结果。

常见的Loaders
babel-loader    转换ES6、ES7等js新特性语法
css-loader      支持.css文件的加载和解析
less-loader     将less文件转换成css文件
ts-loader       将typescript转换成js
file-loader     进行图片、字体等打包
raw-loader      将文件以字符串的形式导入
thread-loader   多进程打包js和css

loaders的用法
``` javascript
const path = require('path');

module.exports = {
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.txt$/,     // test 指定匹配规则
                use:'raw-loader'    // use 指定使用的 loader 名称 
            }     
        ]
    }
}
```