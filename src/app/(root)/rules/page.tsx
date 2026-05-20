import { Metadata } from 'next'

import { Rules } from '@/app/(root)/rules/Rules'

export const metadata: Metadata = {
	title: 'Правила использования ресурса'
}

export default function RulesPage() {
	return <Rules />
}
