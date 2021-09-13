module.exports = {
  webpack(config) {
    // support svg
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: { svgoConfig: { plugins: { removeViewBox: false } } },
        },
      ],
    })

    return config
  },
  images: {
    domains: ['localhost'],
  },
}
