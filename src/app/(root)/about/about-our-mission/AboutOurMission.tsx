import { OurMissionCard } from '@/app/(root)/about/about-our-mission/OurMissionCard'

const cards = [
	{
		icon: '🔍',
		title: 'Достоверность',
		text: 'Только проверенный контент от реальных путешественников. Никакой рекламы, никаких проплаченных отзывов.'
	},
	{
		icon: '🤝',
		title: 'Взаимопомощь',
		text: 'Сообщество путешественников, которые помогают друг другу. Задайте вопрос — получите честный ответ.'
	},
	{
		icon: '♻️',
		title: 'Ответственность',
		text: 'Мы продвигаем экологически осознанный туризм и уважение к природным объектам и местным жителям.'
	},
	{
		icon: '🗺️',
		title: 'Открытость',
		text: 'Все данные и маршруты в открытом доступе. Мы верим, что информация о красоте России должна быть доступна каждому.'
	}
]

export function AboutOurMission() {
	return (
		<section className='section-pad bg-off-white'>
			<div className='container'>
				<div className='text-center mb-5'>
					<span className='section-label'>Наша миссия</span>
					<h2 className='section-title'>Ценности платформы</h2>
					<div className='divider-fancy mx-auto'></div>
				</div>
				<div className='row g-4'>
					{cards.map((card, index) => (
						<OurMissionCard key={index} {...card} />
					))}
				</div>
			</div>
		</section>
	)
}
