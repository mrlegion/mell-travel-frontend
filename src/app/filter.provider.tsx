// contexts/FilterContext.tsx
'use client'

import { createContext, ReactNode, useCallback, useContext, useState } from 'react'

interface FiltersType {
	searchTerm: string | null
	region: string | null
	tag: string | null
	sortBy: 'date' | 'likes' | null
}

interface FilterContextType {
	filters: FiltersType
	setFilters: (filters: Partial<FiltersType>) => void
	clearFilters: () => void
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export function FilterProvider({ children }: { children: ReactNode }) {
	const [filters, setFiltersState] = useState<FiltersType>({
		searchTerm: null,
		region: null,
		tag: null,
		sortBy: null
	})

	const setFilters = useCallback((newFilters: Partial<FiltersType>) => {
		setFiltersState(prev => {
			// Проверяем, изменились ли значения
			const updatedFilters = { ...prev, ...newFilters }
			let hasChanges = false

			for (const key in newFilters) {
				if (newFilters[key as keyof FiltersType] !== prev[key as keyof FiltersType]) {
					hasChanges = true
					break
				}
			}

			return hasChanges ? updatedFilters : prev
		})
	}, [])

	const clearFilters = useCallback(() => {
		setFiltersState({
			searchTerm: null,
			region: null,
			tag: null,
			sortBy: null
		})
	}, [])

	return <FilterContext.Provider value={{ filters, setFilters, clearFilters }}>{children}</FilterContext.Provider>
}

export function useFilter() {
	const context = useContext(FilterContext)
	if (context === undefined) {
		throw new Error('useFilter must be used within a FilterProvider')
	}
	return context
}
