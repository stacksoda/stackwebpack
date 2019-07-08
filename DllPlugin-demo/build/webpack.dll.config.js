const path = require('path');
const DllPlugin = require('webpack/lib/DllPlugin');

module.exports = {
    entry: {
        vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'redux',
            'react-redux',
            'redux-actions',
            'redux-thunk',
            'nprogress',
            'screenfull',
            'antd'
        ]
    },
    output: {
        filename: 'dll/[name].dll.js',
        path: path.resolve(__dirname, '../static/js/'),
        library: '[name]'
    },
    plugins: [
        new DllPlugin({
            path: path.resolve(__dirname, './manifest.json'),
            name: '[name]'
        })
    ]
}