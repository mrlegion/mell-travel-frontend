import style from './HomeHero.module.css'

export function HeroDecoration() {
	return (
		<div className='hero-decoration'>
			<img
				src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900'
				alt='Горы Алтая'
				className={style.home_hero_decoration_img}
			/>
		</div>
	)
}
