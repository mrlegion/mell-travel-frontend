import { axiosWithAuth } from '@/api/api.interceptors'

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
		console.log(data)
		const { data: response } = await axiosWithAuth<IUserUpdateResponse>({
			url: API_URL.profile(),
			method: 'PATCH',
			data
		})

		return response.success
	}
}

export const profileService = new ProfileService()
