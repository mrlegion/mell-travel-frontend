'use client'

import { useQuery } from '@tanstack/react-query'

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
		<div>
			<h2>This is track page</h2>
			<h4>
				track: {track.id}, {track.title}
			</h4>
			{track.images.map((image, key) => (
				<img src={image} alt='123' key={key} style={{ width: '1024px', height: '500px', objectFit: 'cover' }} />
			))}
		</div>
	)
}
