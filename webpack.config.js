module.exports = {
    entry: "./app/App.js",
    output: {
        filename: "dist/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ],
        noParse: [
            /localforage\/dist\/localforage.js/
        ]
    },
    resolve: {
        alias: {
            localforage: 'localforage/dist/localforage.js'
        }

    }

};