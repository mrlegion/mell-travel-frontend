'use client'

import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

import { trackService } from '@/services/track.service'

export const useGetTrackCount = () => {
	const { data: count, isLoading } = useQuery({
		queryKey: ['track count'],
		queryFn: () => trackService.getCount()
	})

	return useMemo(
		() => ({
			count,
			isLoading
		}),
		[count, isLoading]
	)
}
