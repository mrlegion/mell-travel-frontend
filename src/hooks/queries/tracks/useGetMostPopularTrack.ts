'use client'

import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

import { trackService } from '@/services/track.service'

export const useGetMostPopularTrack = () => {
	const { data: mostPopulars, isLoading } = useQuery({
		queryKey: ['most popular track'],
		queryFn: () => trackService.getMostPopular()
	})

	return useMemo(
		() => ({
			mostPopulars,
			isLoading
		}),
		[mostPopulars, isLoading]
	)
}
