const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [{
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        }, ],
    },
}