import style from './AboutOurMisison.module.css'

interface OurMissionCardProps {
	icon: string
	title: string
	text: string
}

export function OurMissionCard({ icon, title, text }: OurMissionCardProps) {
	return (
		<div className='col-md-6 col-lg-3'>
			<div className='value-card'>
				<div className={style.our_mission_card_icon}>{icon}</div>
				<h6 className={style.our_mission_card_title}>{title}</h6>
				<p className={style.our_mission_card_text}>{text}</p>
			</div>
		</div>
	)
}
