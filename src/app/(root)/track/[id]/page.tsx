import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Track } from '@/app/(root)/track/[id]/Track'

import { trackService } from '@/services/track.service'

async function getTrack(id: string) {
	try {
		const track = await trackService.getById(id)

		return { track }
	} catch {
		return notFound()
	}
}

export async function generateMetadata({ params }: ITrackPageProps): Promise<Metadata> {
	const { id } = await params
	const { track } = await getTrack(id)

	return {
		title: track.title,
		description: track.excerpt
	}
}

interface ITrackPageProps {
	params: {
		id: string
	}
}

export default async function TrackPage({ params }: ITrackPageProps) {
	const { id } = await params
	const { track } = await getTrack(id)
	return <Track initialTrack={track} id={id} />
}
