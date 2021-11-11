/** @type {import('next').NextConfig} */
const config = require('./config.json')
const path = require('path')

module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    baseURL: config.baseURL,
    websiteURL: config.websiteURL  
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [config.imagesDomain]
  },
}
