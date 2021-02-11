const dotProp = require('dot-prop')
const showdown = require('showdown')
const mdConverter = new showdown.Converter({
    simpleLineBreaks: true
})
module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    loaders: ["sass-loader"]
                },
                // {
                //     test: /\.pug$/,
                //     oneOf: [
                //         {
                //             resourceQuery: /^\?vue/,
                //             use: ['pug-plain-loader']
                //         },
                //         {
                //             use: ['raw-loader', 'pug-plain-loader']
                //         }
                //     ]
                // }
            ]
        }
    },
    chainWebpack: (config) => {
        config.module.rule('pug').oneOf('raw-pug-files').use('pug-plain').loader('pug-plain-loader')
            .tap((options) => {
                options = options || {}
                dotProp.set(options, 'filters.markdown', (s) => {
                    return mdConverter.makeHtml(s)
                })
                return options
            })

        config.module.rule('pug').oneOf('vue-loader').use('pug-plain').loader('pug-plain-loader')
            .tap((options) => {
                options = options || {}
                dotProp.set(options, 'filters.markdown', (s) => {
                    return mdConverter.makeHtml(s)
                })
                return options
            })
    },
    pages: {
        index: {
            entry: './src/main.js',
            template: './src/index.pug'
        }
    }
}