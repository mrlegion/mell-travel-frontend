import Link from 'next/link'
import { FaPlus } from 'react-icons/fa6'

import { TrackListItem } from '@/components/ui'

import { PUBLIC_URL } from '@/config/url.config'

import { ITrack } from '@/shared/types/track.interface'

import style from '../Profile.module.scss'

interface TabMyTrackProps {
	tracks: ITrack[]
	active: 'my' | 'favorites' | 'settings'
}

export function TabMyTrack({ tracks, active }: TabMyTrackProps) {
	return (
		<div id='pane-posts' className='tab-pane' style={{ display: `${active === 'my' ? 'block' : 'none'}` }}>
			<div className='d-flex justify-content-between align-items-center mb-4'>
				<h5 className={style.profile_tabs_title}>Мои маршруты</h5>
				<Link
					href={PUBLIC_URL.createTrack()}
					className={`btn-primary-green ${style.profile_tabs_btn}`}
					style={{ display: `${active === 'my' ? 'inline-flex' : 'none'}` }}
				>
					<FaPlus /> Новый отчёт
				</Link>
			</div>
			<div className='row g-4' id='myPosts'>
				{tracks.length > 0 ? (
					tracks.map((track, index) => <TrackListItem track={track} key={index} />)
				) : (
					<div className='col-12'>
						<p className='text-muted-mell'>Похоже вы еще не создавали ни одного маршрута</p>
					</div>
				)}
			</div>
		</div>
	)
}
