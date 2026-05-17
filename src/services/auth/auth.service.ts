import { axiosClassic } from '@/api/api.interceptors'

import { API_URL } from '@/config/api.config'

import { removeFromStorage, saveTokenStorage } from '@/services/auth/auth-token.serice'

import { IAuthForm, IAuthLogout, IAuthResponse } from '@/shared/types/auth.interface'

export type TAuthType = 'login' | 'register'

class AuthService {
	// ============================================================
	//   Вход в систему / Регистрация
	// ============================================================
	public async main(type: TAuthType, data: IAuthForm) {
		const response = await axiosClassic<IAuthResponse>({
			url: API_URL.auth(`${type}`),
			method: 'POST',
			data
		})

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

		return response
	}

	// ============================================================
	//   Запрос нового токена
	// ============================================================
	public async getNewTokens() {
		const response = await axiosClassic<IAuthResponse>({
			url: API_URL.auth('/refresh'),
			method: 'POST'
		})

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

		return response
	}

	// ============================================================
	//   Выход из системы
	// ============================================================
	public async logout() {
		const response = await axiosClassic<IAuthLogout>({
			url: API_URL.auth('/logout'),
			method: 'POST'
		})

		if (response.data.success) removeFromStorage()

		return response
	}
}

export const authService = new AuthService()
