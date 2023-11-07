/** @type {import('next').NextConfig} */

const NextFederationPlugin = require("@module-federation/nextjs-mf");
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "shell",
        remotes: {
          Study: `study@http://localhost:3004/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        Dashboard: `dashboard@http://localhost:3005/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        filename: "static/chunks/remoteEntry.js",
        shared: {
          react: { singleton: true },
          "react-dom": { singleton: true },
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
