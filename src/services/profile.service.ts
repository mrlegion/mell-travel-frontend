import { axiosClassic, axiosWithAuth } from '@/api/api.interceptors'

import { API_URL } from '@/config/api.config'

import type { IUser, IUserUpdate, IUserUpdateResponse } from '@/shared/types/user.interface'

class ProfileService {
	// ============================================================
	//   Получение данных текущего пользователя
	// ============================================================
	public async getMe() {
		const { data } = await axiosWithAuth<IUser>({
			url: API_URL.profile(),
			method: 'GET'
		})

		return data
	}

	// ============================================================
	//   Обновление данных текущего пользователя
	// ============================================================
	public async update(data: IUserUpdate) {
		const { data: response } = await axiosWithAuth<IUserUpdateResponse>({
			url: API_URL.profile(),
			method: 'PATCH',
			data
		})

		return response.success
	}

	// ============================================================
	//   Получить данные пользователя по ID
	// ============================================================
	public async getById(id: string) {
		const { data } = await axiosClassic<IUser>({
			url: API_URL.profile(`/by-id/${id}`),
			method: 'GET'
		})

		return data
	}
}

export const profileService = new ProfileService()
