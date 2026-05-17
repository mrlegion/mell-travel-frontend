import { axiosClassic, axiosWithAuth } from '@/api/api.interceptors'

import { API_URL } from '@/config/api.config'
import { PUBLIC_URL } from '@/config/url.config'

import type { IFilters, IRegion, ITrack, ITrackCreate, ITrackView } from '@/shared/types/track.interface'

class TrackService {
	// ============================================================
	//   Получение всех марштуров
	// ============================================================
	public async getAll(searchTerm?: string | null) {
		const { data } = await axiosClassic<ITrack[]>({
			url: API_URL.tracks(),
			method: 'GET',
			params: searchTerm ? { searchTerm } : {}
		})

		return data || []
	}

	// ============================================================
	//   Получение популярных маршрутов
	// ============================================================
	public async getMostPopular() {
		const { data } = await axiosClassic<ITrackView[]>({
			url: API_URL.tracks('/most-popular'),
			method: 'GET'
		})

		return data || []
	}

	// ============================================================
	//   Получение общего кол-ва маршуртов
	// ============================================================
	public async getCount() {
		const { data } = await axiosClassic<number>({
			url: API_URL.tracks('/count'),
			method: 'GET'
		})

		return data
	}

	// ============================================================
	//   Получение количества регионов
	// ============================================================
	public async getRegionCount() {
		const { data } = await axiosClassic<number>({
			url: API_URL.tracks('/region/count'),
			method: 'GET'
		})

		return data
	}

	// ============================================================
	//   Получение маршрута по ID
	// ============================================================
	public async getById(id: string) {
		const { data } = await axiosClassic<ITrack>({
			url: API_URL.tracks(`/by-id/${id}`),
			method: 'GET'
		})

		return data
	}

	// ============================================================
	//   Получение маршрутов по пользователю
	// ============================================================
	public async getByUser(userId: string) {
		const { data } = await axiosClassic<ITrack[]>({
			url: API_URL.tracks(`/by-user/${userId}`),
			method: 'GET'
		})

		return data || []
	}

	// ============================================================
	//   Получение маршрутов текущего пользователя
	// ============================================================
	public async getMyTrack() {
		const { data } = await axiosWithAuth<ITrack[]>({
			url: API_URL.tracks('my-track'),
			method: 'GET'
		})

		return data || []
	}

	// ============================================================
	//   Получение списка имен регионов
	// ============================================================
	public async getRegionNames() {
		const { data: names } = await axiosClassic<string[]>({
			url: API_URL.tracks('/region/name'),
			method: 'GET'
		})

		return names
	}

	// ============================================================
	//   Создание нового маршрута
	// ============================================================
	public async create(data: ITrackCreate) {
		const { data: createdTrack } = await axiosWithAuth<ITrack>({
			url: API_URL.tracks(),
			method: 'POST',
			data
		})

		return createdTrack
	}

	// ============================================================
	//   Получение наименование регионов с количеством маршрутов
	// ============================================================
	public async getRegionWithCount() {
		const { data } = await axiosClassic<IRegion[]>({
			url: API_URL.tracks('/region/name-with-count'),
			method: 'GET'
		})

		return data || []
	}

	// ============================================================
	//   Фильтрация маршрутов
	// ============================================================
	public async getFiltered(filters: IFilters) {
		const { data } = await axiosClassic<ITrack[]>({
			url: PUBLIC_URL.filtered(),
			method: 'GET',
			params: {
				...filters
			}
		})

		return data || []
	}
}

export const trackService = new TrackService()
