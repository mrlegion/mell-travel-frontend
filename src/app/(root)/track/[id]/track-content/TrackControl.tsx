import { FaPencil, FaTrash } from 'react-icons/fa6'

import style from '../Track.module.scss'

interface TrackControlProps {
	trackId: string
}

export function TrackControl({ trackId }: TrackControlProps) {
	return (
		<div className={style.track_info}>
			<h6 className={style.track_info_title}>Информация о маршруте</h6>
			<div className='d-flex flex-column gap-3'>
				<div
					className='d-flex justify-content-between align-items-center py-2'
					style={{ borderBottom: '1px solid var(--gray-pale)' }}
				>
					<button className='btn btn-primary-green'>
						<FaPencil /> Изменить
					</button>
				</div>
				<div
					className='d-flex justify-content-between align-items-center py-2'
					style={{ borderBottom: '1px solid var(--gray-pale)' }}
				>
					<button className='btn btn-primary-green'>
						<FaTrash /> Удалить
					</button>
				</div>
			</div>
		</div>
	)
}
