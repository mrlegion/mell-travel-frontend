import { Menu } from '@/components/layout/footer/Menu'

import { menu } from './menu-items'

export function Footer() {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='row g-4'>
					<div className='col-md-4'>
						<div className='footer-brand'>
							Mell<span>Travel</span>
						</div>
						<p className='footer-desc'>
							Платформа для самостоятельных путешественников по России. Живые маршруты, честные отчёты,
							настоящие истории.
						</p>
					</div>
					{menu.map((item, key) => (
						<Menu title={item.title} items={item.items} className={item.className} key={key} />
					))}
				</div>
				<div className='footer-bottom'>
					<span>© 2026 MellTravel. Курсовая работа по цифровому туризму.</span>
					<span>
						Сделано с <span style={{ color: 'var(--sage-light)' }}>♥</span> к путешествиям
					</span>
				</div>
			</div>
		</footer>
	)
}
