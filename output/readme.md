单个入口的情况下 output的 filename可以是写死的 如 bundle.js
多个入口的情况下 需要使用通配符[name]来进行文件名定义 如 '[name].js'

``` javascript
'use strict'

const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        searchs: './src/search.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: 'production'
}
```
以上文件的输出结果为 searchs.js可见 entry的键为 filename的 [name]