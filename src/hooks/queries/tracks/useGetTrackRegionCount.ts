'use client'

import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

import { trackService } from '@/services/track.service'

export const useGetTrackRegionCount = () => {
	const { data: count, isLoading } = useQuery({
		queryKey: ['track region count'],
		queryFn: () => trackService.getRegionCount()
	})

	return useMemo(
		() => ({
			count,
			isLoading
		}),
		[count, isLoading]
	)
}
