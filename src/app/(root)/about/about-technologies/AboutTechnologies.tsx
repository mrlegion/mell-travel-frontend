import { TechCard } from '@/app/(root)/about/about-technologies/TechCard'

import style from './AboutTechnologies.module.css'

const cards = [
	{
		icon: '🗺️',
		title: 'Leaflet.js',
		text: 'Интерактивные карты'
	},
	{
		icon: '💾',
		title: 'PostgreSQL',
		text: 'Хранение данных'
	},
	{
		icon: '📱',
		title: 'Bootstrap 5',
		text: 'Адаптивный дизайн'
	}
]

export function AboutTechnologies() {
	return (
		<section className='section-pad bg-white'>
			<div className='container'>
				<div className='row g-5 align-items-center'>
					<div className='col-lg-5'>
						<span className='section-label'>Технологии</span>
						<h2 className='section-title'>Как устроена платформа</h2>
						<div className='divider-fancy'></div>
						<p className={style.about_technologies_text}>
							MellTravel построен на принципах доступности и открытых стандартов. Платформа работает в
							браузере без установки приложений, использует интерактивные карты OpenStreetMap через
							библиотеку Leaflet.js, и хранит данные пользователей локально с защитой приватности.
						</p>
					</div>
					<div className='col-lg-7'>
						<div className='row g-3'>
							{cards.map((card, index) => (
								<TechCard key={index} {...card} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
