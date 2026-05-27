import axios, { CreateAxiosDefaults } from 'axios'

import { errorCatch, getContentType } from '@/api/api.helper'

import { SERVER_URL } from '@/config/api.config'

import { getAccessToken, removeFromStorage } from '@/services/auth/auth-token.serice'
import { authService } from '@/services/auth/auth.service'

const options: CreateAxiosDefaults = {
	baseURL: SERVER_URL,
	headers: getContentType(),
	withCredentials: true
}

const axiosClassic = axios.create(options)
const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(config => {
	const accessToken = getAccessToken()

	if (config?.headers && accessToken) config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

axiosWithAuth.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'Токен истек' ||
				errorCatch(error) === 'Токен должен быть в заголовке') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				console.log('Attempting to refresh token...')
				await authService.getNewTokens()
				console.log('Token refreshed successfully')
				return axiosWithAuth.request(originalRequest)
			} catch (error) {
				console.log('Token refresh failed:', error)
				if (errorCatch(error) === 'Токен истек' || errorCatch(error) === 'Не верный токен обновления')
					removeFromStorage()
			}
		}

		throw error
	}
)

export { axiosClassic, axiosWithAuth }
