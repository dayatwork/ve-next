/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const securityHeaders = [
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  // {
  //   key: "X-Frame-Options",
  //   value: "SAMEORIGIN",
  // },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
];

module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  images: {
    domains: [
      "via.placeholder.com",
      "images.unsplash.com",
      "ui-avatars.com",
      "api.hospital-engineering-expo.com",
    ],
  },
  i18n,
};
