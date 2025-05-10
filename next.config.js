/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin');

const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/en',
            permanent: true,
          }
        ]
      },
}

const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl(nextConfig);
