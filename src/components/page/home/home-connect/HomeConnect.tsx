import Link from 'next/link'
import { FaBinoculars, FaPen } from 'react-icons/fa6'

import { PUBLIC_URL } from '@/config/url.config'

export function HomeConnect() {
	return (
		<section className='section-pad bg-white'>
			<div className='container text-center'>
				<span className='section-label'>Присоединяйтесь</span>
				<h2 className='section-title mb-3'>Поделитесь своим маршрутом</h2>
				<p className='section-subtitle mx-auto mb-4'>
					Ваш опыт может вдохновить тысячи путешественников. Публикация занимает не более 10 минут.
				</p>
				<div className='d-flex gap-3 justify-content-center flex-wrap'>
					<Link href={PUBLIC_URL.createTrack()} className='btn-primary-green'>
						<FaPen /> Написать отчёт
					</Link>

					<Link href={PUBLIC_URL.feed()} className='btn-outline-green'>
						<FaBinoculars /> Читать маршруты
					</Link>
				</div>
			</div>
		</section>
	)
}
