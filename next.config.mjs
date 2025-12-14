/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Uncomment and set these if deploying to a subpath (e.g., username.github.io/repo-name)
  // basePath: '/repo-name',
  // assetPrefix: '/repo-name/',
}

export default nextConfig
