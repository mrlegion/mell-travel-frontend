import { Metadata } from 'next'

import { FeedList } from '@/app/(root)/feed/feed-list/FeedList'

export const metadata: Metadata = {
	title: 'Лента маршрутов'
}

export function Feed() {
	return <FeedList />
}
