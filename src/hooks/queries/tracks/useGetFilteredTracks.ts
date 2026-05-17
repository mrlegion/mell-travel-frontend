'use client'

import { useQuery } from '@tanstack/react-query'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

import { trackService } from '@/services/track.service'

export const useGetFilteredTracks = () => {
	const searchParams = useSearchParams()
	const router = useRouter()
	const pathname = usePathname()

	// Получаем параметры из URL
	const searchTerm = searchParams.get('search') || null
	const region = searchParams.get('region') || null
	const tag = searchParams.get('tag') || null
	const sortBy = searchParams.get('sort') as 'date' | 'likes' | null

	const { data: tracks, isLoading } = useQuery({
		queryKey: ['get filtered tracks', searchTerm, region, tag, sortBy],
		queryFn: () =>
			trackService.getFiltered({
				searchTerm,
				region,
				tag,
				sortBy
			})
	})

	// Функция для обновления URL параметров
	const updateFilters = (newFilters: {
		search?: string | null
		region?: string | null
		tag?: string | null
		sort?: string | null
	}) => {
		const params = new URLSearchParams(searchParams.toString())

		Object.entries(newFilters).forEach(([key, value]) => {
			if (value === null || value === '') {
				params.delete(key)
			} else {
				params.set(key, value)
			}
		})

		router.push(`${pathname}?${params.toString()}`, { scroll: false })
	}

	// Функция для очистки всех фильтров
	const clearFilters = () => {
		router.push(pathname, { scroll: false })
	}

	return useMemo(
		() => ({
			tracks,
			isLoading,
			filters: { searchTerm, region, tag, sortBy },
			updateFilters,
			clearFilters
		}),
		[tracks, isLoading, searchTerm, region, tag, sortBy]
	)
}
