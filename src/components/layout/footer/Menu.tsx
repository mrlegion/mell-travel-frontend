import { MenuLink } from '@/components/layout/footer/MenuLink'

import { cn } from '@/shared/utils'

interface MenuProps {
	title: string
	items: MenuItem[]
	className?: string
}

interface MenuItem {
	link: string
	title: string
}

export function Menu({ title, items, className = '' }: MenuProps) {
	return (
		<div className={cn('col-md-2', className)}>
			<h6>{title}</h6>
			<ul className='footer-links'>
				{items.map((item, key) => (
					<MenuLink link={item.link} title={item.title} key={key} />
				))}
			</ul>
		</div>
	)
}
