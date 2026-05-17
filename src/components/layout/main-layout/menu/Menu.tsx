import { MenuLink } from '@/components/layout/main-layout/menu/MenuLink'

import { PUBLIC_URL } from '@/config/url.config'

export function Menu() {
	return (
		<ul className='navbar-nav mx-auto gap-1'>
			<MenuLink href={PUBLIC_URL.home()} title={'Главная'} />
			<MenuLink href={PUBLIC_URL.feed()} title={'Лента'} />
			<MenuLink href={PUBLIC_URL.mapExplorer()} title={'Карта'} />
			<MenuLink href={PUBLIC_URL.about()} title={'О проекте'} />
			<MenuLink href={PUBLIC_URL.contacts()} title={'Поддержка'} />
		</ul>
	)
}
