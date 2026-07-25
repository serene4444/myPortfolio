import path from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/myPortfolio',
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net'
      }
    ]
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(process.cwd())
    config.module.rules.push({
      test: /\.(frag|glsl|vert|vs|fs)$/i,
      type: 'asset/source'
    })
    return config
  }
}

export default nextConfig