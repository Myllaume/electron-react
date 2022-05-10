const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main/render.js',
        config: './src/config/render.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]-bundle.js'
    },
    plugins: [
        ...['main', 'config'].map(entry => {
            return new HtmlWebpackPlugin({
                filename: `${entry}.html`,
                title: entry,
                template: './src/template.html',
                chunks: [entry]
            })
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    mode: "development",
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 9000,
        open: false
    }
}