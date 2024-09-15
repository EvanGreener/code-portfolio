/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    remotePatterns: [
      {
          protocol: 'https',
          hostname: 'rxjs.dev',
          port: '',
          pathname: '/**',
      },
  ],
  }
}

export default nextConfig
