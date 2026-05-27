import { Metadata } from 'next'

import { About } from '@/app/(root)/about/About'

export const metadata: Metadata = {
	title: 'О проекте'
}

export default function AboutPage() {
	return <About />
}
