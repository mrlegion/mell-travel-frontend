import { Metadata } from 'next'

import { Profile } from '@/app/(root)/profile/Profile'

export const metadata: Metadata = {
	title: 'Личный кабинет'
}
export default function ProfilePage() {
	return <Profile />
}
