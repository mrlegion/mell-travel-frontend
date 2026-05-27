import { useRouter } from 'next/navigation'
import { FaClock, FaMountain, FaPencil, FaTrash } from 'react-icons/fa6'

import { PUBLIC_URL } from '@/config/url.config'

import { useRemoveTrack } from '@/hooks/queries/tracks/useRemoveTrack'

import style from '../Track.module.scss'

interface TrackInfoProps {
	duration: string
	difficulty: string
	controlItem?: boolean
	trackId: string
}

export function TrackInfo({ duration, difficulty, trackId, controlItem = false }: TrackInfoProps) {
	const { removeTrack, isLoadingRemove } = useRemoveTrack(trackId)

	const router = useRouter()

	const handleRemoveClick = () => {
		removeTrack()
	}

	const handleEditClick = () => {
		router.push(PUBLIC_URL.editTrack(trackId))
	}

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
				{controlItem && (
					<div
						className='d-flex justify-content-between align-items-center py-2'
						style={{ borderBottom: '1px solid var(--gray-pale)' }}
					>
						<button className='btn btn-outline-green' disabled={isLoadingRemove} onClick={handleEditClick}>
							<FaPencil /> Изменить
						</button>

						<button
							className='btn btn-outline-danger'
							style={{
								borderRadius: '50px',
								padding: '12px 28px'
							}}
							disabled={isLoadingRemove}
							onClick={handleRemoveClick}
						>
							<FaTrash /> Удалить
						</button>
					</div>
				)}
			</div>
		</div>
	)
}
