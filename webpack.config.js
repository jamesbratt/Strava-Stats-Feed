const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Strava Stats Feed',
            template: './src/index.html'
        }),
    ],
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    }
};