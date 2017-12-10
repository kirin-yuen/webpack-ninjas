var path = require('path');

module.exports = {
    // 入口配置
    entry: './js/index.js',
    // 输出配置
    output: {
        // path: __dirname + '/dist',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
                test: /\.js$/, // 所有js文件
                exclude: /(node_modules)/, // 排除node_modules里的js
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'] //使用es2015设置
                }
            },
            {
                test: /\.scss$/, // 所有css文件                
                loader: 'style-loader!css-loader!sass-loader', // css文件先使用css-loader装载至js中，再渲染到DOM
            }
        ]
    }
};