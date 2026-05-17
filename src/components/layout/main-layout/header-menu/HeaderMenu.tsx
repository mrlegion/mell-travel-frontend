import { HamburgerButton } from '@/components/layout/main-layout/hamburger-button/HamburgerButton'
import { Logo } from '@/components/layout/main-layout/logo/Logo'
import { Menu } from '@/components/layout/main-layout/menu/Menu'
import { Profile } from '@/components/layout/main-layout/profile/Profile'

export function HeaderMenu() {
	return (
		<nav className='navbar navbar-expand-lg'>
			<div className='container'>
				<Logo />
				<HamburgerButton />
				<div className='collapse navbar-collapse' id='navMain'>
					<Menu />
					<Profile />
				</div>
			</div>
		</nav>
	)
}
