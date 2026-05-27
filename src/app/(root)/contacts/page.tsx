import { Metadata } from 'next'

import { Contracts } from '@/app/(root)/contacts/Contracts'

export const metadata: Metadata = {
	title: 'Поддержка'
}

export default function ContactsPage() {
	return <Contracts />
}
