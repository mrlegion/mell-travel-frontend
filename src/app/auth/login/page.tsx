import { Metadata } from 'next'

import { AuthLogin } from '@/app/auth/login/AuthLogin'

export const metadata: Metadata = {
	title: 'Вход'
}

export default function AuthLoginPage() {
	return <AuthLogin />
}
