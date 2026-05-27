import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa6'

import { PUBLIC_URL } from '@/config/url.config'

import style from './TrackHero.module.scss'

interface TrackHeroProps {
	title?: string
	text?: string
	mode: 'create' | 'edit'
}

export function TrackHero({ title, text, mode }: TrackHeroProps) {
	if (mode === 'create') {
		title = 'Новый маршрут'
		text = 'Поделитесь своим опытом — помогите другим путешественникам'
	}

	return (
		<div className={style.track_hero}>
			<div className='container'>
				<Link href={PUBLIC_URL.feed()} className={style.track_hero_link}>
					<FaArrowLeft className='me-1' />К ленте
				</Link>
				<h1 className={style.track_hero_title}>{title}</h1>
				<p className={style.track_hero_text}>{text}</p>
			</div>
		</div>
	)
}
