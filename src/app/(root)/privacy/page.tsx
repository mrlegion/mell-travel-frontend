import { Metadata } from 'next'

import { PrivacyPolicy } from '@/app/(root)/privacy/PrivacyPolicy'

export const metadata: Metadata = { title: 'Политика конфиденциальности' }

export default function PrivacyPage() {
	return <PrivacyPolicy />
}
