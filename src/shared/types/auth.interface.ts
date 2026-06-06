import { IUser } from '@/shared/types/user.interface'

export interface IAuthForm {
	name: string
	email: string
	password: string
	license: boolean
}

export interface IAuthResponse {
	user: IUser
	accessToken: string
}

export interface IAuthLogout {
	success: boolean
}
