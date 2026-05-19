import { FaClock, FaMountain } from 'react-icons/fa6'

import style from '../Track.module.scss'

interface TrackInfoProps {
	duration: string
	difficulty: string
}

export function TrackInfo({ duration, difficulty }: TrackInfoProps) {
	return (
		<div className={style.track_info}>
			<h6 className={style.track_info_title}>Информация о маршруте</h6>
			<div className='d-flex flex-column gap-3'>
				<div
					className='d-flex justify-content-between align-items-center py-2'
					style={{ borderBottom: '1px solid var(--gray-pale)' }}
				>
					<span className={style.track_info_label}>
						<FaClock className='me-2 text-sage' /> Продолжительность
					</span>
					<strong id='postDuration' style={{ fontSize: '.9rem' }}>
						{duration}
					</strong>
				</div>
				<div
					className='d-flex justify-content-between align-items-center py-2'
					style={{ borderBottom: '1px solid var(--gray-pale)' }}
				>
					<span className={style.track_info_label}>
						<FaMountain className='me-2 text-sage' /> Сложность
					</span>
					<strong id='postDifficulty' style={{ fontSize: '.9rem' }}>
						{difficulty}
					</strong>
				</div>
			</div>
		</div>
	)
}
