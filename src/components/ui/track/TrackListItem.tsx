'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa6'

import { PUBLIC_URL } from '@/config/url.config'

import { useGetTrackInLike } from '@/hooks/queries/likes/useGetTrackInLike'
import { useSetLikeToTrack } from '@/hooks/queries/likes/useSetLikeToTrack'
import { useProfile } from '@/hooks/useProfile'

import { ITrackView } from '@/shared/types/track.interface'
import { getAvatarColorSimple } from '@/shared/utils/translate'

import './TrackListItem.module.css'

interface TrackListItemProps {
	track: ITrackView
}

export function TrackListItem({ track }: TrackListItemProps) {
	if (!track) return null

	const [likesCount, setLikesCount] = useState<number>(0)

	useEffect(() => {
		setLikesCount(Math.floor(Math.random() * (300 - 10 + 1)) + 10)
	}, [])

	const router = useRouter()

	const image =
		track.images?.length > 0
			? track.images[0]
			: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'

	const { user } = useProfile()
	const likes = user?.likes ? user.likes : []
	const { toggleLike, isLoadingToggleLike } = useSetLikeToTrack()

	const handleLikeClick = async () => {
		toggleLike(track.id)
	}

	return (
		<div
			className='route-card'
			data-id={track.id}
			style={{
				paddingRight: '0 ',
				paddingLeft: '0 '
			}}
		>
			<div className='card-img-wrap' style={{ cursor: 'default' }}>
				<img src={image} alt={track.title} loading='lazy' />
				<span className='card-badge'>{track.difficulty || 'Маршрут'}</span>
				{user && (
					<button
						className={`card-like ${likes.includes(track.id) ? 'liked' : ''}`}
						data-post-id={track.id}
						onClick={handleLikeClick}
						disabled={isLoadingToggleLike}
					>
						<FaHeart />
					</button>
				)}
			</div>
			<div className='card-body' onClick={() => router.push(PUBLIC_URL.track(track.id))}>
				<div className='card-region'>{track.region}</div>
				<div className='card-title'>{track.title}</div>
				<div className='card-text'>{track.excerpt}</div>
				<div className='d-flex gap-1 flex-wrap mb-2'>
					{track.tags &&
						track.tags?.length > 0 &&
						track.tags.map((tag, index) => (
							<span className='tag' key={index}>
								{tag}
							</span>
						))}
				</div>
				<div className='card-meta'>
					<div className='author' style={{ cursor: 'pointer' }}>
						{track.account && track.account?.avatar ? (
							<img className='avatar-sm' src={track.account.avatar} alt={track.account.name} />
						) : (
							<div
								className='avatar-fallback'
								style={{
									backgroundColor: getAvatarColorSimple(track.account?.name)
								}}
							>
								{track.account?.name?.[0]?.toUpperCase() || '?'}
							</div>
						)}
						<span>{track.account?.name}</span>
					</div>
					<div>♥ {likesCount}</div>
				</div>
			</div>
		</div>
	)
}
