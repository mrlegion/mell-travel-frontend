import { clsx } from 'clsx'
import { FaShieldHalved } from 'react-icons/fa6'

import { cm } from '@/shared/utils'

import style from './RulesHero.module.css'

export function RulesHero() {
	return (
		<div className='rules-hero'>
			<div className='container'>
				<div className={clsx('d-inline-flex align-items-center gap-2 mb-3', style.rules_hero_up_title)}>
					<FaShieldHalved />
					Сообщество
				</div>
				<h1 className={style.rules_hero_title}>Правила сообщества</h1>
				<p className={style.rules_hero_undertitle}>
					MellTravel — пространство для честного обмена опытом. Чтобы оно оставалось таковым, мы
					придерживаемся нескольких важных принципов.
				</p>
			</div>
		</div>
	)
}
