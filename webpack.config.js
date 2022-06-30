const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    mode: 'development',
    entry: ["./src/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        // publicPath: '/dist',
    },
    resolve: {
        extensions: [
            '.js', '.jsx', '.css', '.scss'
        ],
        alias: {
            Components: path.resolve(__dirname, 'src/components/'),
            Styles: path.resolve(__dirname, 'src/styles/'),
            Images: path.resolve(__dirname, 'src/images/'),
        }
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            use: "babel-loader",
            exclude: /node_modules/,
        },
        { 
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
            test: /\.png$/,
            use: [
            {
                loader: "url-loader",
                options: {
                mimetype: "image/png",
                },
            },
            ],
        },
        {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
            test: /\.svg$/,
            use: "file-loader",
        },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
        patterns: [
            { 
            from: path.resolve(__dirname, "public", "favicon-32x32.ico"),
            to: path.resolve(""),
            }
        ],
        }),
        new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "index.html",
        }),
        new MiniCssExtractPlugin(),
    ],
    devServer: {
        static: {
        directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 3050,
        open: true,
        historyApiFallback: true,
    },
};

module.exports = config;