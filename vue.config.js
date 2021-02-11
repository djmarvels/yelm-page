module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    loaders: ["sass-loader"]
                }
            ]
        }
    }

    // ...
}