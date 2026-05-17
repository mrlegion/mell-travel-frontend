import style from './AboutTechnologies.module.css'

interface TechCardProps {
	icon: string
	title: string
	text: string
}

export function TechCard({ icon, title, text }: TechCardProps) {
	return (
		<div className='col-md-4'>
			<div className={style.about_technologies_card}>
				<div className={style.about_technologies_card_icon}>{icon}</div>
				<div className={style.about_technologies_card_title}>{title}</div>
				<div className={style.about_technologies_card_text}>{text}</div>
			</div>
		</div>
	)
}
