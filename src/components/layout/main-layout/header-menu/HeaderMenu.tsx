'use client'

import { useState } from 'react'

import { HamburgerButton } from '@/components/layout/main-layout/hamburger-button/HamburgerButton'
import { Logo } from '@/components/layout/main-layout/logo/Logo'
import { Menu } from '@/components/layout/main-layout/menu/Menu'
import { Profile } from '@/components/layout/main-layout/profile/Profile'

export function HeaderMenu() {
	const [menuOpen, setMenuOpen] = useState<boolean>(false)

	const handleBurgerClick = () => {
		setMenuOpen(!menuOpen)
	}

	return (
		<nav className='navbar navbar-expand-lg'>
			<div className='container'>
				<Logo />
				<HamburgerButton handleClick={handleBurgerClick} />
				<div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id='navMain'>
					<Menu />
					<Profile />
				</div>
			</div>
		</nav>
	)
}
