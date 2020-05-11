const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd;
const filename = (ext) => isProd ? `bundle[hash].${ext}` : `bundle.${ext}`

const jsLoader = () => {
    const loaders = [
        {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    ]
    if (isDev) loaders.push('eslint-loader')
    return loaders
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: process.env.NODE_ENV,
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: filename('.js'),
        path: path.resolve(__dirname, 'dist')
    },
    devtool: isProd ? false : 'source-map',
    devServer: {
        port: 4000,
        hot: isDev
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: `index.html`,
            minify: isProd
        }),
        new MiniCssExtractPlugin({
            filename: filename('.css')
        }),
        new CopyPlugin([
            {
                from: path.resolve(__dirname, 'src/assets/favicon.ico'),
                to: path.resolve(__dirname, 'dist')
            },
        ]),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true
                        }
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoader()
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.scss'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'src/core'),
        }
    }
}
