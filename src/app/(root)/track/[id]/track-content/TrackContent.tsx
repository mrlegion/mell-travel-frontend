'use client'

import { router } from 'next/client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaArrowLeft, FaMapLocationDot } from 'react-icons/fa6'

import { TrackComment } from '@/app/(root)/track/[id]/track-comment/TrackComment'
import { CommentForm } from '@/app/(root)/track/[id]/track-content/CommentForm'
import { TrackInfo } from '@/app/(root)/track/[id]/track-content/TrackInfo'
import { TrackGallery } from '@/app/(root)/track/[id]/track-gallery/TrackGallery'
import { TrackMap } from '@/app/(root)/track/[id]/track-map/TrackMap'

import { PUBLIC_URL } from '@/config/url.config'

import { useGetComments } from '@/hooks/queries/comments/useGetComments'
import { useGetTrackInLike } from '@/hooks/queries/likes/useGetTrackInLike'
import { useSetLikeToTrack } from '@/hooks/queries/likes/useSetLikeToTrack'
import { useProfile } from '@/hooks/useProfile'

import { ITrack } from '@/shared/types/track.interface'

import style from '../Track.module.scss'

interface TrackContentProps {
	track: ITrack
}

export function TrackContent({ track }: TrackContentProps) {
	const { user } = useProfile()
	const { toggleLike, isLoadingToggleLike } = useSetLikeToTrack()
	const { liked: isLike, isLoading: isLikeLoading } = useGetTrackInLike(track.id)
	const router = useRouter()

	const { comments, isLoading, isError } = useGetComments(track.id)

	const [isLikedLocal, setIsLiked] = useState<boolean>(false)
	const [likeCountLocal, setLikeCount] = useState<number>(track.likes)

	useEffect(() => {
		if (isLike !== undefined) setIsLiked(isLike)
		setLikeCount(track.likes)
	}, [isLike, track])

	const hadleLikeClick = async () => {
		if (!user) {
			router.push(PUBLIC_URL.auth('/login'))
			return
		}

		const prevIsLiked = isLikedLocal
		const prevLikeCount = likeCountLocal

		setIsLiked(!isLikedLocal)
		setLikeCount(prev => (isLikedLocal ? prev - 1 : prev + 1))

		try {
			await toggleLike(track.id)
		} catch (error) {
			setIsLiked(prevIsLiked)
			setLikeCount(prevLikeCount)
		}
	}

	return (
		<div id='postContent'>
			<section className='section-pad bg-white'>
				<div className='container'>
					<div className='row g-5'>
						<div className='col-lg-8'>
							<div className='d-flex gap-2 flex-wrap mb-4' id='postTags'>
								{track.tags.map((tag, index) => (
									<span className='tag' key={index}>
										{tag}
									</span>
								))}
							</div>
							<div className='post-content'>
								<p id='postBody' className={style.track_content_body}>
									{track.text}
								</p>
							</div>
							<h4 className={style.track_content_title}>Фотографии</h4>
							<div className='gallery-grid' id='postGallery'>
								<TrackGallery images={track.images} />
							</div>

							<h4 className={style.track_content_title}>
								<FaMapLocationDot style={{ color: 'var(--sage-dark)' }} />
								Точка маршрута
							</h4>
							<div
								className='post-map'
								id='postRouteMap'
								style={{
									height: '420px',
									margin: '2rem 0'
								}}
							>
								<TrackMap lat={track.lat} lng={track.lng} title={track.title} />
							</div>
							<div className='d-flex gap-3 flex-wrap my-4'>
								<button
									id='postLikeBtn'
									className={`btn-outline-green btn-like ${style.track_content_btn} ${isLikedLocal ? 'liked' : ''}`}
									onClick={hadleLikeClick}
									disabled={isLoadingToggleLike || isLikeLoading}
								>
									<i className='fa-regular fa-heart'></i>
									Нравится: <span id='postLikeCount'>{likeCountLocal}</span>
								</button>
								<button id='postFavBtn' className={`btn-outline-green ${style.track_content_btn}`}>
									<i className='fa-regular fa-bookmark'></i> В избранное
								</button>
								<Link
									href={PUBLIC_URL.feed()}
									className={`btn-outline-green ${style.track_content_btn}`}
								>
									<FaArrowLeft /> К ленте
								</Link>
							</div>
							<div className='mt-5'>
								<h4 className={style.track_content_title}>
									<i
										className='fa-regular fa-comments me-2'
										style={{ color: 'var(--sage-dark)' }}
									></i>
									Комментарии
								</h4>
								<div id='commentsContainer' className='mb-4'>
									{(!comments || comments.length === 0) && (
										<p className='text-muted-mell text-center py-3 small'>
											Пока нет комментариев. Будьте первым!
										</p>
									)}
									{comments && comments.length > 0
										? comments.map((comment, index) => (
												<TrackComment
													author={track.account.name}
													date={comment.createdAt}
													text={comment.text}
													key={index}
												/>
											))
										: ''}
								</div>

								{user ? (
									<CommentForm trackId={track.id} />
								) : (
									<div className='text-muted-mell text-center py-3 small'>
										Чтобы оставить комментарий
										<Link
											className='ms-1'
											style={{
												display: 'inline-block',
												color: 'var(--sage-dark)',
												fontFamily: "'Geologica', sans-serif",
												fontWeight: 500,
												fontSize: '0.92rem'
											}}
											href={PUBLIC_URL.auth('/login')}
										>
											Войдите в аккаунт
										</Link>{' '}
										или
										<Link
											className='ms-1'
											style={{
												display: 'inline-block',
												color: 'var(--sage-dark)',
												fontFamily: "'Geologica', sans-serif",
												fontWeight: 500,
												fontSize: '0.92rem'
											}}
											href={PUBLIC_URL.auth('/register')}
										>
											Зарегистрируйтесь
										</Link>
									</div>
								)}
							</div>
						</div>
						<div className='col-lg-4'>
							<TrackInfo
								duration={track.duration ? track.duration : '-'}
								difficulty={track.difficulty ? track.difficulty : '-'}
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
