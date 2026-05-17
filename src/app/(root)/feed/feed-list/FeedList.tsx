'use client'

import React, { useEffect, useState } from 'react'

import { FeedHeader } from '@/app/(root)/feed/feed-header/FeedHeader'
import { FeedPublish } from '@/app/(root)/feed/feed-publish/FeedPublish'

import { TrackListItem } from '@/components/ui'

import { useGetFilteredTracks } from '@/hooks/queries/tracks/useGetFilteredTracks'

export function FeedList() {
	const { tracks: filteredTracks, isLoading, filters, updateFilters } = useGetFilteredTracks()
	const [activeTag, setActiveTag] = useState(filters.tag || 'all')

	const tracks = filteredTracks ? filteredTracks : []
	const counts = tracks.length

	// Обновляем активный тег при изменении URL
	useEffect(() => {
		setActiveTag(filters.tag || 'all')
	}, [filters.tag])

	const handleTagClick = (tag: string) => {
		setActiveTag(tag)
		updateFilters({
			tag: tag === 'all' ? null : tag
		})
	}

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateFilters({ search: e.target.value || null })
	}

	const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		updateFilters({ region: e.target.value || null })
	}

	const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		updateFilters({ sort: e.target.value || null })
	}

	return (
		<>
			<FeedHeader
				onSearch={handleSearch}
				onRegionChange={handleRegionChange}
				onSortChange={handleSortChange}
				onTagClick={handleTagClick}
				activeTag={activeTag}
				currentFilters={filters}
				foundCounts={counts}
			/>
			<section className='section-pad bg-off-white'>
				<div className='container'>
					<div className='row g-4' id='feedGrid'>
						{isLoading ? (
							<div>Загрузка...</div>
						) : tracks && tracks.length > 0 ? (
							tracks.map((item, index) => <TrackListItem track={item} key={index} />)
						) : (
							<div>Маршруты не найдены</div>
						)}
					</div>
					<FeedPublish />
				</div>
			</section>
		</>
	)
}
