import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { trackService } from '@/services/track.service'

import { EditTrack } from './EditTrack'

async function getTrack(id: string) {
	try {
		const track = await trackService.getById(id)

		return { track }
	} catch {
		return notFound()
	}
}

export async function generateMetadata({ params }: IEditTrackPageProps): Promise<Metadata> {
	const { id } = await params
	const { track } = await getTrack(id)

	return {
		title: track.title,
		description: track.excerpt
	}
}

interface IEditTrackPageProps {
	params: Promise<{ id: string }>
}

export default async function EditTrackPage({ params }: IEditTrackPageProps) {
	const { id } = await params
	const { track } = await getTrack(id)

	return <EditTrack track={track} id={id} />
}
