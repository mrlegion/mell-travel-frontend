import Link from 'next/link'
import { FaBinoculars, FaPen } from 'react-icons/fa6'

import { PUBLIC_URL } from '@/config/url.config'

import style from './AboutCommand.module.css'

export function AboutCommand() {
	return (
		<section className={`section-pad ${style.about_command}`}>
			<div className='container text-center'>
				<h2 className={style.about_command_title}>Станьте частью сообщества</h2>
				<p className={style.about_command_subtitle}>
					Поделитесь своим маршрутом или найдите вдохновение для следующего путешествия
				</p>
				<div className='d-flex gap-3 justify-content-center flex-wrap'>
					<Link
						href={PUBLIC_URL.track('/create')}
						className='btn-primary-green'
						style={{ background: 'white', color: 'var(--sage-dark)' }}
					>
						<FaPen /> Опубликовать маршрут
					</Link>

					<Link
						href={PUBLIC_URL.feed()}
						className='btn-outline-green'
						style={{ borderColor: 'rgba(255,255,255,.5)', color: 'white' }}
					>
						<FaBinoculars /> Читать маршруты
					</Link>
				</div>
			</div>
		</section>
	)
}
