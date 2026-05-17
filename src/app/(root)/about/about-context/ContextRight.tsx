import { ContextCard } from '@/app/(root)/about/about-context/ContextCard'

const cards = [
	{
		icon: '🏔',
		title: 'Алтай',
		text: 'Горный Алтай — наиболее посещаемый регион для трекинга в России',
		color: {
			background: 'var(--sage-pale)'
		}
	},
	{
		icon: '🌊',
		title: 'Байкал',
		text: 'Самое глубокое пресноводное озеро планеты — круглогодичный объект для туризма',
		color: {
			background: 'var(--sky-light)'
		}
	},
	{
		icon: '🌋',
		title: 'Камчатка',
		text: 'Уникальный вулканический полуостров с нетронутой дикой природой',
		color: {
			background: 'var(--sand-light)'
		}
	},
	{
		icon: '🌲',
		title: 'Карелия',
		text: 'Озёра, пороги и белые ночи — классика водного туризма',
		color: {
			background: 'var(--gray-pale)'
		}
	}
]

export function ContextRight() {
	return (
		<div className='col-lg-6'>
			<div className='row g-3'>
				{cards.map((card, index) => (
					<ContextCard key={index} {...card} />
				))}
			</div>
		</div>
	)
}
