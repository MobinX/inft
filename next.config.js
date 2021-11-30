const withPWA = require("next-pwa");
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development", // disabled in develop mode
  },
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
  
});