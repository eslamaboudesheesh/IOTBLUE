/** @type {import('next').NextConfig} */
const config = require('./config.json')

module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    baseURL: config.baseURL,
    websiteURL: config.websiteURL  
  },
  images: {
    domains: [config.imagesDomain]
  },
}
