import type { Metadata } from 'next'
import { Viewport } from 'next'
import { Inter } from 'next/font/google'

import LayoutClient from '@/components/layout/Layout'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Социальная сеть | NH',
	description: 'Best social media web app for everyone!',
	icons: '/logo.svg',
}

export const viewport: Viewport = {
	themeColor: '#0E0B18',
	colorScheme: 'dark',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru'>
			<body className={inter.className}>
				<LayoutClient>{children}</LayoutClient>
			</body>
		</html>
	)
}
