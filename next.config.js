/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		API_URL: process.env.API_URL,
		BACK_URL: process.env.BACK_URL,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '127.0.0.1',
				port: '1337',
				pathname: '/**',
			},
		],
	},
}

module.exports = nextConfig
