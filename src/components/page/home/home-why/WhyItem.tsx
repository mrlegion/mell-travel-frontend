import { ReactElement } from 'react'

import style from './HomeWhy.module.css'

interface WhyItemProps {
	icon: ReactElement
	title: string
	text: string
	color: 'green' | 'sky' | 'sand'
}

export function WhyItem({ icon, title, text, color }: WhyItemProps) {
	return (
		<div className='col-md-4'>
			<div className='why-card'>
				<div className={`why-icon ${color}`}>{icon}</div>
				<h5 className={style.home_why_item_title}>{title}</h5>
				<p className={style.home_why_item_text}>{text}</p>
			</div>
		</div>
	)
}
