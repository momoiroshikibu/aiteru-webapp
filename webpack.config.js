const webpack = require('webpack');
const COMMIT_HASH = process.env.COMMIT_HASH;

module.exports = {
    devtool: 'source-map',
    context: __dirname + '/src',
    entry: {
        app: './app.js'
    },
    output: {
        path: __dirname + '/dist/assets',
        filename: `bundle.${COMMIT_HASH}.js`
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};
