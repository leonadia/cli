const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// PostCss
const postcssVars = require('postcss-simple-vars');
const postcssImport = require('postcss-import');
const path = require('path');

module.exports = {
    entry: {
        lib: ['react', 'react-dom'],
        gui: './src/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, '../cordova/www'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
                resolve: {
                    extensions: ['.js', '.jsx']
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize: true}
                    }
                ]
            },
            {
                test: /\.(jpg|png|ttf|svg)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'url-loader'
                }
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1,
                        localIdentName: '[name]_[local]_[hash:base64:5]',
                        camelCase: true
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: function () {
                            return [
                                postcssImport,
                                postcssVars
                            ];
                        }
                    }
                }]
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css',
            chunkFilename: '[id].[chunkhash].css'
        })
    ]
};
