import { Metadata } from 'next'

import { AuthRegister } from '@/app/auth/register/AuthRegister'

export const metadata: Metadata = {
	title: 'Регистрация'
}

export default function AuthRegisterPage() {
	return <AuthRegister />
}
