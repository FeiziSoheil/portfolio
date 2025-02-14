/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['aceternity.com'], // اضافه کردن دامنه‌ی مجاز برای next/image
  },
}

module.exports = nextConfig;
