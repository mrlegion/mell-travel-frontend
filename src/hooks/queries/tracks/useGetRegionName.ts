'use client'

import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

import { trackService } from '@/services/track.service'

export const useGetRegionName = () => {
	const { data: names, isLoading } = useQuery({
		queryKey: ['get all track region'],
		queryFn: () => trackService.getRegionNames()
	})

	return useMemo(
		() => ({
			names,
			isLoading
		}),
		[names, isLoading]
	)
}
