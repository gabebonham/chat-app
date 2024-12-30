import type { NextConfig } from 'next';
import 'dotenv/config';
const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/login',
				permanent: true,
			},
		];
	},
};

export default nextConfig;
