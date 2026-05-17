'use client'

import Link from 'next/link'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'

import { PUBLIC_URL } from '@/config/url.config'

import { useProfile } from '@/hooks/useProfile'

export function Profile() {
	const { user, isLoading } = useProfile()

	return (
		<div className='d-flex gap-2 align-items-center auth-buttons'>
			{user ? (
				<div>
					<span className='user-name small me-2' style={{ color: 'var(--charcoal);' }}>
						${user.name}
					</span>
					<Link href={PUBLIC_URL.profile()} className='nav-link'>
						<FaUser />
					</Link>
					<Link
						href={PUBLIC_URL.auth('/logout')}
						className='btn-nav-primary logout-btn'
						style={{ background: 'var(--gray-mid)' }}
					>
						<FaSignOutAlt /> Выйти
					</Link>
				</div>
			) : (
				<Link
					href={PUBLIC_URL.auth()}
					className='btn-nav-primary login-btn me-2'
					style={{ textDecoration: 'none' }}
				>
					<FaSignInAlt /> Войти
				</Link>
			)}
		</div>
	)
}
