import { Metadata } from 'next'
import { Suspense } from 'react'

import { Feed } from '@/app/(root)/feed/Feed'

import { Loader } from '@/components/ui/loader/Loader'

export const metadata: Metadata = {
	title: 'Лента маршрутов'
}

export default function FeedPage() {
	return (
		<Suspense>
			<Feed />
		</Suspense>
	)
}
