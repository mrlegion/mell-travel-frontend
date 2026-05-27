import Cookies from 'js-cookie'
import { toast } from 'react-hot-toast'

import { axiosClassic, axiosWithAuth } from '@/api/api.interceptors'

import { API_URL } from '@/config/api.config'

import { EnumTokens, getRefreshToken, removeFromStorage, saveTokenStorage } from '@/services/auth/auth-token.serice'

import { IAuthForm, IAuthLogout, IAuthResponse } from '@/shared/types/auth.interface'

export type TAuthType = 'login' | 'register'

class AuthService {
	// ============================================================
	//   Вход в систему / Регистрация
	// ============================================================
	public async main(type: TAuthType, data: IAuthForm) {
		const response = await axiosClassic<IAuthResponse>({
			url: API_URL.auth(`/${type}`),
			method: 'POST',
			data
		})

		console.log(response)

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

		return response
	}

	// ============================================================
	//   Запрос нового токена
	// ============================================================
	public async getNewTokens() {
		const refreshToken = getRefreshToken()
		if (!refreshToken) throw new Error('Токен обновления не найден')

		try {
			const response = await axiosClassic<IAuthResponse>({
				url: API_URL.auth('/refresh'),
				method: 'POST',
				data: {
					refreshToken
				}
			})

			if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

			return response
		} catch (error: any) {
			removeFromStorage()
			toast.error(error?.response?.data?.message || 'Ошибка обновления токена')
		}
	}

	// ============================================================
	//   Выход из системы
	// ============================================================
	public async logout() {
		const response = await axiosWithAuth<IAuthLogout>({
			url: API_URL.auth('/logout'),
			method: 'POST'
		})

		if (response.data.success) removeFromStorage()

		return response
	}
}

export const authService = new AuthService()
