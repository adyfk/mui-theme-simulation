const withPlugins = require("next-compose-plugins");

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};
module.exports = withPlugins([], config);
