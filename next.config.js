/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	// distDir: 'dist',
	experimental: {
		esmExternals: false,
		outputStandalone: true,
	},
}

module.exports = nextConfig
