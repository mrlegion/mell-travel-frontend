import style from './AboutContext.module.css'

interface ContextCardProps {
	icon: string
	title: string
	text: string
	color: {
		background: string
	}
}

export function ContextCard({ icon, title, text, color }: ContextCardProps) {
	return (
		<div className='col-6'>
			<div className={style.about_context_card} style={color}>
				<div className={style.about_context_card_icon}>{icon}</div>
				<h6 className={style.about_context_card_title}>{title}</h6>
				<p className={style.about_context_card_text}>{text}</p>
			</div>
		</div>
	)
}
