const withCSS = require('@zeit/next-css')

const plugins = withCSS()

module.exports = {
  target: 'server',
  ...plugins,
}
