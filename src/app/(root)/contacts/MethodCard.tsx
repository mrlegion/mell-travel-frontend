import type { ReactElement } from 'react'

import style from './Contacts.module.scss'

interface MethodCardProps {
	icon: ReactElement
	title: string
	subtitle: string
	link: {
		href: string
		text: string
	}
	color: {
		icon: {
			background: string
		}
		link: {
			color: string
		}
	}
}

export function MethodCard({ icon, title, subtitle, link, color }: MethodCardProps) {
	return (
		<div className='col-md-4'>
			<div className='contact-card'>
				<div className='contact-icon' style={color.icon}>
					{icon}
				</div>
				<h6 className={style.contacts_info_card_title}>{title}</h6>
				<p className={style.contacts_info_card_subtitle}>{subtitle}</p>
				<a href={link.href} className={style.contacts_info_card_link} style={color.link}>
					{link.text}
				</a>
			</div>
		</div>
	)
}
