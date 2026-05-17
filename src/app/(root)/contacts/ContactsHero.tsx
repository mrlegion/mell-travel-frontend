import { FaEnvelope } from 'react-icons/fa6'

import style from './Contacts.module.scss'

export function ContactsHero() {
	return (
		<div className='contacts-hero'>
			<div className='container'>
				<div className={`d-inline-flex align-items-center gap-2 mb-3 ${style.contacts_hero_up_icon}`}>
					<FaEnvelope /> Связаться с нами
				</div>
				<h1 className={style.contacts_hero_title}>Центр поддержки</h1>
				<p className={style.contacts_hero_subtitle}>
					Есть вопрос, предложение или нашли ошибку? Мы рады помочь — пишите, и мы ответим в течение 24 часов.
				</p>
			</div>
		</div>
	)
}
