import Link from 'next/link'
import { FaPen } from 'react-icons/fa6'

import { PUBLIC_URL } from '@/config/url.config'

export function FeedPublish() {
	return (
		<section className='section-pad bg-off-white'>
			<div className='container'>
				<div className='row g-4' id='feedGrid'></div>
				<div
					className='text-center mt-5 p-4'
					style={{ background: 'var(--sage-pale)', borderRadius: 'var(--radius)' }}
				>
					<h5 style={{ fontFamily: "'Playfair Display',serif", marginBottom: '.5rem' }}>
						Были в интересном месте?
					</h5>
					<p className='text-muted-mell small mb-3'>
						Поделитесь своим маршрутом — вдохновите других путешественников
					</p>
					<Link href={PUBLIC_URL.createTrack()} className='btn-primary-green'>
						<FaPen /> Опубликовать маршрут
					</Link>
				</div>
			</div>
		</section>
	)
}
