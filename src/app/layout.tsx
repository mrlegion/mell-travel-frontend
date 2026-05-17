import type { Metadata } from 'next'
import Script from 'next/script'
import React from 'react'

import { FilterProvider } from '@/app/filter.provider'
import { Providers } from '@/app/providers'

import '../shared/css/bootstrap.min.css'

import './globals.css'

export const metadata: Metadata = {
	title: {
		absolute: 'MellTravel — Путеводитель по России',
		template: `%s - MellTravel`
	},
	description: 'Путеводитель по России',
	icons: {
		icon: [
			{
				url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%236b8f52'/%3E%3Ctext x='50' y='70' text-anchor='middle' font-size='50' fill='white' font-family='Arial' font-weight='bold'%3EM%3C/text%3E%3C/svg%3E",
				type: 'image/svg+xml'
			}
		]
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<head>
				<link
					href='https://fonts.googleapis.com/css2?family=Geologica:wght,CRSV@100..900,0&display=swap'
					rel='stylesheet'
				/>
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
				/>
			</head>
			<body className={`antialiased`}>
				<Providers>
					<FilterProvider>{children}</FilterProvider>
				</Providers>
				<Script src='/js/script.js' strategy='afterInteractive' />
			</body>
		</html>
	)
}
