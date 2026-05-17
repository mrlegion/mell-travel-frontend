import { FaHeart } from 'react-icons/fa6'

import { ITrackView } from '@/shared/types/track.interface'
import { getAvatarColorSimple } from '@/shared/utils/translate'

import './TrackListItem.module.css'

interface TrackListItemProps {
	track: ITrackView
}

export function TrackListItem({ track }: TrackListItemProps) {
	const image =
		track.images.length > 0 ? track.images[0] : 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'

	return (
		<div
			className='route-card'
			data-id='${post.id}'
			style={{
				paddingRight: '0 ',
				paddingLeft: '0 '
			}}
		>
			<div className='card-img-wrap'>
				<img src={image} alt={track.title} loading='lazy' />
				<span className='card-badge'>{track.difficulty || 'Маршрут'}</span>
				<button className='card-like' data-post-id={track.id}>
					<FaHeart />
				</button>
			</div>
			<div className='card-body'>
				<div className='card-region'>{track.region}</div>
				<div className='card-title'>{track.title}</div>
				<div className='card-text'>{track.excerpt}</div>
				<div className='d-flex gap-1 flex-wrap mb-2'>
					{track.tags.map((tag, index) => (
						<span className='tag' key={index}>
							{tag}
						</span>
					))}
				</div>
				<div className='card-meta'>
					<div className='author' style={{ cursor: 'pointer' }}>
						{
							<div
								className='avatar-fallback'
								style={{ backgroundColor: getAvatarColorSimple(track.account.name) }}
							>
								{track.account.name?.[0]?.toUpperCase() || '?'}
							</div>
						}
						<span>{track.account.name}</span>
					</div>
					<div>♥ {track.likes}</div>
				</div>
			</div>
		</div>
	)
}
