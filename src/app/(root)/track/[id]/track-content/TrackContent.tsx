'use client'

import { router } from 'next/client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { FaArrowLeft, FaMapLocationDot } from 'react-icons/fa6'

import { TrackComment } from '@/app/(root)/track/[id]/track-comment/TrackComment'
import { CommentForm } from '@/app/(root)/track/[id]/track-content/CommentForm'
import { TrackControl } from '@/app/(root)/track/[id]/track-content/TrackControl'
import { TrackInfo } from '@/app/(root)/track/[id]/track-content/TrackInfo'
import { TrackGallery } from '@/app/(root)/track/[id]/track-gallery/TrackGallery'
import { TrackMap } from '@/app/(root)/track/[id]/track-map/TrackMap'

import { PUBLIC_URL } from '@/config/url.config'

import { useGetComments } from '@/hooks/queries/comments/useGetComments'
import { useToggleFavorites } from '@/hooks/queries/favorites/useToggleFavorites'
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
	const [likeCount, setLikeCount] = useState<number>(0)
	const [inFav, setInFav] = useState<boolean>(false)
	const { toggleFavorite, isLoadingToggleFavorites } = useToggleFavorites()

	const router = useRouter()

	const { comments, isLoading, isError } = useGetComments(track.id)
	useEffect(() => {
		if (user && user.favorites) {
			setInFav(user.favorites.includes(track.id))
		}
	}, [track.id, user])

	useEffect(() => {
		setLikeCount(Math.floor(Math.random() * (300 - 10 + 1)) * 10)
	}, [])

	const hadleLikeClick = () => {
		if (!user) {
			toast.error('Для отметки понравившегося маршрута требуется войти в аккаунт или зарегистрироваться', {
				duration: 3000
			})
		} else {
			toggleLike(track.id)
		}
	}

	const handleFavClick = () => {
		if (!user) {
			toast.error('Для отметки понравившегося маршрута требуется войти в аккаунт или зарегистрироваться', {
				duration: 3000
			})
		} else {
			toggleFavorite(track.id)
			setInFav(!inFav)
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
									className={`btn-outline-green btn-like ${style.track_content_btn} ${user?.likes.includes(track.id) ? 'liked' : ''}`}
									onClick={hadleLikeClick}
									disabled={isLoadingToggleLike}
								>
									<i className='fa-regular fa-heart'></i>
									Нравится: <span id='postLikeCount'>{likeCount}</span>
								</button>
								<button
									id='postFavBtn'
									onClick={handleFavClick}
									disabled={isLoadingToggleFavorites}
									className={`btn-outline-green btn-like ${style.track_content_btn} ${inFav ? 'liked' : ''}`}
								>
									<i className='fa-regular fa-bookmark'></i> {inFav ? 'Из избранного' : 'В избранное'}
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
													author={comment.author}
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
								controlItem={!!user && track.account.id === user.id}
								trackId={track.id}
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
