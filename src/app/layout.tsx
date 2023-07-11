import './globals.css'
import '../../public/fonts/font.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'ArchiSwap',
	// description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<meta name="theme-color" content="rgba(10, 1, 24, 0.10)" />
				<meta
					name="msapplication-navbutton-color"
					content="rgba(10, 1, 24, 0.10)"
				/>
				<meta name="apple-mobile-web-app-capable" content="yes" />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
