// FeedHeaderControls.tsx
'use client'

import React, { useEffect, useState } from 'react'

import { useGetAllTags } from '@/hooks/queries/tracks/useGetAllTags'

interface FeedHeaderControlsProps {
	onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
	onRegionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
	onSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
	onTagClick: (tag: string) => void
	activeTag: string
	currentFilters: {
		searchTerm: string | null
		region: string | null
		tag: string | null
		sortBy: string | null
	}
	foundCounts: number
}

export function FeedHeader({
	onSearch,
	onRegionChange,
	onSortChange,
	onTagClick,
	activeTag,
	currentFilters,
	foundCounts = 0
}: FeedHeaderControlsProps) {
	const [searchValue, setSearchValue] = useState(currentFilters.searchTerm || '')

	const { tags } = useGetAllTags()

	// Синхронизируем значение поиска с URL
	useEffect(() => {
		setSearchValue(currentFilters.searchTerm || '')
	}, [currentFilters.searchTerm])

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
		onSearch(e)
	}

	return (
		<div className='feed-header'>
			<div className='container'>
				<div className='row align-items-center mb-3'>
					<div className='col'>
						<h1 className='section-title mb-0' style={{ fontSize: '1.8rem' }}>
							Лента маршрутов
						</h1>
					</div>
					<div className='col-auto text-muted-mell small'>
						Найдено: <strong id='postCount'>{foundCounts}</strong> публикаций
					</div>
				</div>
				<div className='mb-3'>
					<div className='d-flex gap-2 flex-wrap align-items-center'>
						<div style={{ position: 'relative', flex: 1, maxWidth: '360px' }}>
							<i
								className='fa-solid fa-magnifying-glass'
								style={{
									position: 'absolute',
									left: '12px',
									top: '50%',
									transform: 'translateY(-50%)',
									color: 'var(--gray-mid)',
									fontSize: '.85rem'
								}}
							></i>
							<input
								type='text'
								value={searchValue}
								onChange={handleSearchChange}
								placeholder='Поиск по маршрутам...'
								className='form-control-mell'
								style={{ paddingLeft: '2.2rem' }}
							/>
						</div>
						<select value={currentFilters.region || ''} onChange={onRegionChange} className='filter-select'>
							<option value=''>Все регионы</option>
							<option value='Алтай'>Алтай</option>
							<option value='Байкал'>Байкал</option>
							<option value='Камчатка'>Камчатка</option>
							<option value='Карелия'>Карелия</option>
							<option value='Мурманская область'>Мурманская область</option>
						</select>
						<select
							value={currentFilters.sortBy || 'date'}
							onChange={onSortChange}
							className='filter-select'
						>
							<option value='date'>По дате</option>
							<option value='likes'>По популярности</option>
						</select>
					</div>
				</div>
				<div className='filter-bar pb-2'>
					<span
						style={{ fontSize: '.82rem', color: 'var(--gray-mid)', fontWeight: 500, marginRight: '.25rem' }}
					>
						Тег:
					</span>
					<button
						className={`tag filter-tag-btn ${activeTag === 'all' ? 'active' : ''}`}
						onClick={() => onTagClick('all')}
					>
						Все
					</button>
					{tags.map(tag => (
						<button
							key={tag}
							className={`tag filter-tag-btn ${activeTag === tag ? 'active' : ''}`}
							onClick={() => onTagClick(tag)}
						>
							{tag}
						</button>
					))}
				</div>
			</div>
		</div>
	)
}
