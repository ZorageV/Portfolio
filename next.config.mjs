/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true
    },
    distDir: 'build',
    images: {
        unoptimized: true,
        domains: ['cdn.sanity.io']
    },
    // Remove output: "export" to enable server-side rendering
};

export default nextConfig;