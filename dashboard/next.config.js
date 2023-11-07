/** @type {import('next').NextConfig} */

const NextFederationPlugin = require('@module-federation/nextjs-mf');
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'dashboard',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
         './dashboard': './pages/dashboard/index.tsx',
         './main': './pages/index',
        },
        shared: {
          react: { singleton: true },
          "react-dom": { singleton: true },
          "next/router" : { singleton: true, eager:true },
        }
      })
    );

    return config;
  },
}

module.exports = nextConfig
