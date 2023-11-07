/** @type {import('next').NextConfig} */

const NextFederationPlugin = require('@module-federation/nextjs-mf');
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'study',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './study': './src/pages/index.tsx',
        },
        shared: {
          react: { singleton: true },
          "react-dom": { singleton: true },
        }
      })
    );

    return config;
  },
}

module.exports = nextConfig
