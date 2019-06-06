webpack中解析css需要使用css-loader
css-loader用于加载.css文件,并且转换成commonjs对象
style-loader用于将样式通过<style>表情插入到head中

loader的调用是链式调用 执行顺序是从右向左 因此css的loader配置为

``` javascript
const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    mode: 'production'
}
```

less-loader用于将less转换成css
安装 less和less-loader
npm i less less-loader -D