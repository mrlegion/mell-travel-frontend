import { Metadata } from 'next'

import { CreateTrack } from '@/app/(root)/track/create/CreateTrack'

export const metadata: Metadata = {
	title: 'Создание нового маршрута'
}

export default function CreateTrackPage() {
	return <CreateTrack />
}
