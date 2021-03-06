module.exports = {
    entry: "./build/app.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    devtool: 'source-map',
    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: 'source-map-loader'
        }],
        loaders: [{
            test: /\.ts(x?)$/,
            loader: 'ts-loader'
        }]
    }
};