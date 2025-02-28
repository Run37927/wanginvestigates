/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'devfoli-web-storage.s3.us-east-1.amazonaws.com',
            }
        ],
    },
};

export default nextConfig;
