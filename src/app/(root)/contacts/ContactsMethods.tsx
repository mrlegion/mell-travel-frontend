import { FaEnvelope, FaFlag, FaTelegram } from 'react-icons/fa6'

import { MethodCard } from '@/app/(root)/contacts/MethodCard'

export function ContactsMethods() {
	return (
		<div className='row g-4 mb-5'>
			<MethodCard
				icon={<FaEnvelope style={{ color: 'var(--sage-dark)' }} />}
				title='Электронная почта'
				subtitle='Для общих вопросов и предложений по развитию платформы'
				link={{
					href: 'mailto:hello@melltravel.ru',
					text: 'hello@melltravel.ru'
				}}
				color={{
					icon: { background: 'var(--sage-pale)' },
					link: { color: 'var(--sage-dark)' }
				}}
			/>

			<MethodCard
				icon={<FaTelegram style={{ color: '#4a90b8' }} />}
				title='Telegram'
				subtitle='Быстрые ответы на вопросы и новости сообщества путешественников'
				link={{
					href: '#',
					text: '@melltravel'
				}}
				color={{
					icon: { background: 'var(--sky-light)' },
					link: { color: '#4a90b8' }
				}}
			/>

			<MethodCard
				icon={<FaFlag style={{ color: '#c4944a' }} />}
				title='Сообщить о нарушении'
				subtitle='Нашли недостоверный контент или нарушение правил? Сообщите нам.'
				link={{
					href: '#contacts-form',
					text: 'Через форму ниже'
				}}
				color={{
					icon: { background: 'var(--sand-light)' },
					link: { color: '#c4944a' }
				}}
			/>
		</div>
	)
}
