import { axiosWithAuth } from '@/api/api.interceptors'

import { API_URL } from '@/config/api.config'

import { ILikeResponse, LikeToggle } from '@/shared/types/like.interface'

class LikeService {
	// ============================================================
	//   Переключение лайка на маршруте
	// ============================================================
	public async toggle(toggle: LikeToggle) {
		const { data } = await axiosWithAuth<ILikeResponse>({
			url: API_URL.like('/toggle'),
			method: 'POST',
			data: toggle
		})

		return data
	}

	// ============================================================
	//   Проверка является ли текущий маршрут лайкнутым в пользователя
	// ============================================================
	public async isLiked(trackId: string) {
		const { data } = await axiosWithAuth<boolean>({
			url: API_URL.like(`/${trackId}`),
			method: 'GET'
		})

		return data
	}
}

export const likeService = new LikeService()
