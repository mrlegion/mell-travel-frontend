import { axiosClassic, axiosWithAuth } from '@/api/api.interceptors'

import { API_URL } from '@/config/api.config'

import type { IFavoriteToggle, IFavoriteToggleResponse, IFavoriteUser } from '@/shared/types/favorite.interface'

class FavoriteService {
	// ============================================================
	//	Добавление/удаление маршрута из избранного пользователя
	// ============================================================
	public async toggle(data: IFavoriteToggle) {
		const { data: result } = await axiosWithAuth<IFavoriteToggleResponse>({
			url: API_URL.favorite('/toggle'),
			method: 'POST',
			data
		})

		return result.success
	}

	// ============================================================
	//   Получить избранное текущего пользователя
	// ============================================================
	public async getMy() {
		const { data } = await axiosWithAuth<IFavoriteUser>({
			url: API_URL.favorite('/my'),
			method: 'GET'
		})

		return data
	}

	// ============================================================
	//   Получить избранное пользователя
	// ============================================================
	public async getByUser(userId: string) {
		const { data } = await axiosClassic<IFavoriteUser>({
			url: API_URL.favorite(`/user/${userId}`),
			method: 'GET'
		})

		return data
	}

	// ============================================================
	//   Проверка наличия маршрута в избранном пользователя
	// ============================================================
	public async trackInFavorites(trackId: string) {
		const { data: result } = await axiosWithAuth<boolean>({
			url: API_URL.favorite(`/in/${trackId}`),
			method: 'GET'
		})

		return result
	}
}

export const favoriteService = new FavoriteService()
