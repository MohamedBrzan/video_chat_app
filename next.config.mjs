/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  publicRuntimeConfig: {
    imagesFolder: 'static/images',
  },
};

export default nextConfig;
