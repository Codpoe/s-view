var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const marked = require('marked');
const renderer = new marked.Renderer();

module.exports = {
    entry: {
        sview: './src/js/sview.js',
        index: './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/dist/",
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        postcss: ExtractTextPlugin.extract({
                            use: "css-loader",
                            fallback: "vue-style-loader"
                        })
                    },
                    postcss: [
                        require("postcss-cssnext")(),
                        require("precss")()
                    ]
                }
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["es2015"]
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: [
                                    require("postcss-cssnext")(),
                                    require("precss")()
                                ]
                            }
                        }
                    ]    
                })
                // use: [
                //     {
                //         loader: 'style-loader'
                //     },
                //     {
                //         loader: 'css-loader'
                //     },
                //     {
                //         loader: 'postcss-loader',
                //         options: {
                //             plugins: [
                //                 require('postcss-cssnext')(),
                //                 require('precss')()
                //             ]
                //         }
                //     }
                // ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]?[hash]"
                        }
                    }
                ]
            },
            {
                test: /\.md$/,
                loader: 'vue-markdown-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "[name].bundle.css"
        })
    ],
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]);
}
