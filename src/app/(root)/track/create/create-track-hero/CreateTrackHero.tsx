import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa6'

import { PUBLIC_URL } from '@/config/url.config'

import style from '../CreateTrack.module.scss'

export function CreateTrackHero() {
	return (
		<div className={style.create_track_hero}>
			<div className='container'>
				<Link href={PUBLIC_URL.feed()} className={style.create_track_hero_link}>
					<FaArrowLeft className='me-1' />К ленте
				</Link>
				<h1 className={style.create_track_hero_title}>Новый маршрут</h1>
				<p className={style.create_track_hero_text}>
					Поделитесь своим опытом — помогите другим путешественникам
				</p>
			</div>
		</div>
	)
}
