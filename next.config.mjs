/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Outputs a Single-Page Application (SPA).
  distDir: './dist', // Changes the build output directory to `./dist/`.
  rewrites: async () => ([{
    source: '/tourApi/:path*',
    destination: 'https://apis.data.go.kr/B551011/KorService1/:path*',
  }]),

  compiler: {
    styledComponents: true,
  },

};

export default nextConfig;