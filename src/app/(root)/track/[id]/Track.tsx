'use client'

import { useQuery } from '@tanstack/react-query'

import { TrackContent } from '@/app/(root)/track/[id]/track-content/TrackContent'
import { TrackHero } from '@/app/(root)/track/[id]/track-hero/TrackHero'

import { trackService } from '@/services/track.service'

import { ITrack } from '@/shared/types/track.interface'

interface TrackProps {
	initialTrack: ITrack
	id?: string
}

export function Track({ initialTrack, id = '' }: TrackProps) {
	const { data: track } = useQuery({
		queryKey: ['track', initialTrack.id],
		queryFn: () => trackService.getById(id),
		initialData: initialTrack,
		enabled: !!id
	})

	return (
		<>
			<TrackHero
				region={track.region}
				title={track.title}
				author={track.account.name}
				authorId={track.account.id}
				createdAt={track.createdAt}
				image={track.images[0]}
			/>
			<TrackContent track={track} />
		</>
	)
}
