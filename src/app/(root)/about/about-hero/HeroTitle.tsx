import style from './AboutHero.module.css'

export function HeroTitle() {
	return (
		<div className='col-lg-7'>
			<span className='section-label' style={{ color: 'var(--sage-light)' }}>
				О платформе
			</span>
			<h1 className={style.about_hero_left_title}>
				Цифровой туризм
				<br />в эпоху перемен
			</h1>
			<p className={style.about_hero_left_subtitle}>
				MellTravel — онлайн-платформа для самостоятельных путешественников, создающих и изучающих маршруты по
				России. Мы объединяем реальный опыт людей с технологиями цифровой навигации.
			</p>
		</div>
	)
}
