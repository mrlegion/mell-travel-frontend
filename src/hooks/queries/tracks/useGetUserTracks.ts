'use client'

import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

import { trackService } from '@/services/track.service'

export const useGetUserTracks = () => {
	const { data: tracks, isLoading } = useQuery({
		queryKey: ['get user tracks'],
		queryFn: () => trackService.getMyTrack()
	})

	return useMemo(
		() => ({
			tracks,
			isLoading
		}),
		[tracks, isLoading]
	)
}
