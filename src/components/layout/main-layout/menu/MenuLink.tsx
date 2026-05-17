'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/shared/utils'

interface MenuLinkProps {
	active?: boolean
	href: string
	title: string
}

export function MenuLink({ href, title, active = true }: MenuLinkProps) {
	const pathname = usePathname()

	const isActive = active ? pathname === href : pathname.startsWith(href)

	return (
		<li className='nav-item'>
			<Link href={href} className={cn('nav-link', isActive ? 'active' : '')}>
				{title}
			</Link>
		</li>
	)
}
