/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  publicRuntimeConfig: {
    imagesFolder: 'static/images',
  },
};

export default nextConfig;
