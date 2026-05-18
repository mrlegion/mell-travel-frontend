import { TrackListItem } from '@/components/ui'

import { ITrack } from '@/shared/types/track.interface'

import style from '../Profile.module.scss'

interface TabFavoriteTrackProps {
	tracks: ITrack[]
	active: 'my' | 'favorites' | 'settings'
}

export function TabFavoriteTrack({ tracks, active }: TabFavoriteTrackProps) {
	return (
		<div
			id='pane-favorites'
			className='tab-pane'
			style={{ display: `${active === 'favorites' ? 'block' : 'none'}` }}
		>
			<h5 className={style.profile_tabs_title} style={{ marginBottom: '1.5rem' }}>
				Сохранённые маршруты
			</h5>
			<div className='row g-4' id='myFavorites'>
				{tracks.length > 0 ? (
					tracks.map((track, index) => <TrackListItem track={track} key={index} />)
				) : (
					<div className='col-12'>
						<p className='text-muted-mell'>Избранное пусто</p>
					</div>
				)}
			</div>
		</div>
	)
}
