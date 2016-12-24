const webpack = require('webpack');
const COMMIT_HASH = process.env.COMMIT_HASH;
module.exports = {
    context: __dirname + '/src',
    entry: {
        app: './app.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: `bundle.${COMMIT_HASH}.js`
    }
};
