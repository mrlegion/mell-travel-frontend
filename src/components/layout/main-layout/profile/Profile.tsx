'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'

import { PUBLIC_URL } from '@/config/url.config'

import { useProfile } from '@/hooks/useProfile'

import { authService } from '@/services/auth/auth.service'

export function Profile() {
	const { user, isLoading } = useProfile()

	const router = useRouter()
	const queryClient = useQueryClient()

	const { mutate: logout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => {
			queryClient.clear()
			router.push(PUBLIC_URL.home())
			router.refresh()
			toast.success('Успешный выход из системы')
		}
	})

	return (
		<div className='d-flex gap-2 align-items-center auth-buttons'>
			{user ? (
				<>
					<span className='user-name small me-2' style={{ color: 'var(--charcoal)' }}>
						{user.name}
					</span>
					<Link href={PUBLIC_URL.profile()} className='nav-link'>
						<FaUser />
					</Link>
					<button
						onClick={() => logout()}
						className='btn-nav-primary logout-btn'
						style={{ background: 'var(--gray-mid)' }}
					>
						<FaSignOutAlt /> Выйти
					</button>
				</>
			) : (
				<Link
					href={PUBLIC_URL.auth('/login')}
					className='btn-nav-primary login-btn me-2'
					style={{ textDecoration: 'none' }}
				>
					<FaSignInAlt /> Войти
				</Link>
			)}
		</div>
	)
}
