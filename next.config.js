const nextConfig = {
  trailingSlash: true,

  sassOptions: {
    additionalData: '@import "styles/imports.scss";'
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            dimensions: false
          }
        }
      ]
    })

    return config
  }
}

module.exports = nextConfig
