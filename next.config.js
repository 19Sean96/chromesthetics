const withTM = require('next-transpile-modules')(['drei', 'three'])
const withSass = require('@zeit/next-sass')
module.exports = withSass(withTM())
