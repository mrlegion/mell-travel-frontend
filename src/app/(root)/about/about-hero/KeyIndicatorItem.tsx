import style from './AboutHero.module.css'

interface KeyIndicatorItemProps {
	value: string
	text: string
}

export function KeyIndicatorItem({ value, text }: KeyIndicatorItemProps) {
	return (
		<div className='col-6'>
			<div className={style.about_hero_key_value} id='aboutRoutesCount'>
				{value}
			</div>
			<div className={style.about_hero_key_text}>{text}</div>
		</div>
	)
}
