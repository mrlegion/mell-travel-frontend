import { Suspense } from 'react'

import { Feed } from '@/app/(root)/feed/Feed'

export default function FeedPage() {
	return (
		<Suspense fallback='Загрузка ...'>
			<Feed />
		</Suspense>
	)
}
