
const path = require('path')
const alias = require('./alias.js')
const root = path.resolve(__dirname + '/..')


const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const DisableOutputWebpackPlugin = require('disable-output-webpack-plugin')
    

const cssLoaders = (dev, ...loaders) => {

    let count = 1 + loaders.length

    return [
        { 
            loader: MiniCssExtractPlugin.loader 
        },
        {
            loader: 'css-loader',
            options: { importLoaders: count },
        },
        {
            loader: 'postcss-loader',
            options: {
                plugins: dev ? [
                    require('postcss-preset-env')({ stage: 1 }),
                    require('autoprefixer')
                ] : [
                    require('postcss-preset-env')({ stage: 1 }),
                    require('autoprefixer'),
                    require('cssnano')
                ]
            }
        },
        ...loaders
    ]
}


const styles = (dev) => ({
    mode: dev ? 'development' : 'production',
    devtool: 'source-map',
    stats: 'errors-only',
    entry: {
       index: './src/pages/index.js'
    },
    module: {
        rules: [            
            { test: /\.(js|jsx)$/i, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.(css)$/i,
                use: cssLoaders(dev)                
            },
            {
                test: /\.(less)$/i,
                use: cssLoaders(dev, 'less-loader')                
            },
            {
                test: /\.s[ac]ss$/i,
                use: cssLoaders(dev, 'sass-loader')
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 0, // always use files
                        name: "./assets/[name].[contenthash:16].[ext]"
                    }
                }
            }
        ]
    },
    resolve: { alias },
    plugins: [
        new DisableOutputWebpackPlugin({ test: /\.js/ }),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
    ]
})


const client = (dev) => ({
    mode: dev ? 'development' : 'production',
    devtool: 'source-map',
    stats: 'errors-only',
    entry: {
        client : path.join(root, './src/client.js')
    },
    output: {
        path: path.join(root, './dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
            // don't load CSS into the client bundle,
            // we'll do that statically on build in 'app'
            { test: /\.(less|css|scss)$/, loader: 'ignore-loader' }
        ]
    },
    resolve: { alias }
})


module.exports = (env, argv) => {
    
    const dev = (argv.mode && argv.mode === 'development')

    return [
    	client(dev),
    	styles(dev)
    ]
}