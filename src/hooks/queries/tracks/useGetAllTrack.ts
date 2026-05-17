'use client'

import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

import { trackService } from '@/services/track.service'

export const useGetAllTrack = () => {
	const { data: tracks, isLoading } = useQuery({
		queryKey: ['get all track'],
		queryFn: () => trackService.getAll()
	})

	return useMemo(
		() => ({
			tracks,
			isLoading
		}),
		[tracks, isLoading]
	)
}
