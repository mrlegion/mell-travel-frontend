import { IUser } from '@/shared/types/user.interface'

import style from '../Profile.module.scss'

interface ProfileHeroProps {
	user: IUser | undefined
	likes: number
	tracksCount: number
}

export function ProfileHero({ user, likes, tracksCount }: ProfileHeroProps) {
	if (!user) return null

	return (
		<div className='profile-hero'>
			<div className='container'>
				<div className='row align-items-end g-4'>
					<div className='col-auto'>
						<img className='avatar-circle' src={user.avatar} alt='Аватар' />
					</div>
					<div className='col'>
						<div className={style.profile_hero_uptitle}>Путешественник · MellTravel</div>
						<h1 className={style.profile_hero_title}>{user.name}</h1>
						<p className={`bio-text ${style.profile_hero_bio}`}>{user.bio}</p>
						<div className='d-flex gap-2 flex-wrap'>
							<span className={`tag ${style.profile_hero_tag}`}>🏔 Горный трекинг</span>
							<span className={`tag ${style.profile_hero_tag}`}>🛶 Водные маршруты</span>
							<span className={`tag ${style.profile_hero_tag}`}>🌿 Дикая природа</span>
						</div>
					</div>
					<div className='col-auto'>
						<div className='d-flex gap-3 flex-wrap align-items-center'>
							<div className='profile-stat-card'>
								<div className={style.profile_hero_stat_card}>{tracksCount}</div>
								<div className={style.profile_hero_stat_card_title}>Публикаций</div>
							</div>
							<div className='profile-stat-card'>
								<div className={style.profile_hero_stat_card}>{likes}</div>
								<div className={style.profile_hero_stat_card_title}>Лайков</div>
							</div>
							<div id='subscribeBtnContainer'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
