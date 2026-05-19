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
	const router = useRouter()

	const image =
		track.images.length > 0 ? track.images[0] : 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'

	const { user } = useProfile()
	const { liked: isLiked, isLoading: isLikeLoading } = useGetTrackInLike(track.id)
	const { toggleLike, isLoadingToggleLike } = useSetLikeToTrack()

	const [localIsLiked, setLocalIsLiked] = useState<boolean>(false)
	const [localLikes, setLocalLikes] = useState<number>(track.likes)

	useEffect(() => {
		if (isLiked !== undefined) setLocalIsLiked(isLiked)
	}, [isLiked])

	const handleLikeClick = async () => {
		if (!user) {
			router.push(PUBLIC_URL.auth('/login'))
			return
		}

		const prevIsLikes = localIsLiked
		const prevLikes = localLikes

		setLocalIsLiked(!localIsLiked)
		setLocalLikes(prev => (localIsLiked ? prev - 1 : prev + 1))

		try {
			await toggleLike(track.id)
		} catch (error) {
			setLocalIsLiked(prevIsLikes)
			setLocalLikes(prevLikes)
		}
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
						className={`card-like ${localIsLiked ? 'liked' : ''}`}
						data-post-id={track.id}
						onClick={handleLikeClick}
						disabled={isLoadingToggleLike || isLikeLoading}
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
					{track.tags.map((tag, index) => (
						<span className='tag' key={index}>
							{tag}
						</span>
					))}
				</div>
				<div className='card-meta'>
					<div className='author' style={{ cursor: 'pointer' }}>
						{track.account.avatar ? (
							<img className='avatar-sm' src={track.account.avatar} alt={track.account.name} />
						) : (
							<div
								className='avatar-fallback'
								style={{ backgroundColor: getAvatarColorSimple(track.account.name) }}
							>
								{track.account.name?.[0]?.toUpperCase() || '?'}
							</div>
						)}
						<span>{track.account.name}</span>
					</div>
					<div>♥ {localLikes}</div>
				</div>
			</div>
		</div>
	)
}
