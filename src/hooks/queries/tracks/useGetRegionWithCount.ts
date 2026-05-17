'use client'

import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

import { trackService } from '@/services/track.service'

export const useGetRegionWithCount = () => {
	const { data: regions, isLoading } = useQuery({
		queryKey: ['track region with count'],
		queryFn: () => trackService.getRegionWithCount()
	})

	return useMemo(
		() => ({
			regions,
			isLoading
		}),
		[regions, isLoading]
	)
}
