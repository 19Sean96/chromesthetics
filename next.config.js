const withTM = require('next-transpile-modules')(['drei', 'three', 'gsap', 'react-spring'])
const withSass = require('@zeit/next-sass')
module.exports = withSass(withTM({
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(|eot|ttf|woff|woff2)$/,
        })

        return config
    }
}))
