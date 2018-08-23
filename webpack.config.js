var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/main.js', // 项目的入口文件，webpack会从main.js开始，把所有依赖的js都加载打包
    output: {
        path: path.resolve(__dirname, './dist'), // 项目的打包文件路径
        publicPath: '/dist/', // 通过devServer访问路径
        filename: 'build.js', // 打包后的文件名
    },
    devServer: {
        historyApiFallback: true, // 不跳转
        overlay: true, // 这个配置属性用来在编译出错的时候，在浏览器页面上显示错误 
    }
};