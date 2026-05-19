import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaUser } from 'react-icons/fa'
import { FaArrowLeft, FaCalendar } from 'react-icons/fa6'

import { PUBLIC_URL } from '@/config/url.config'

import style from '../Track.module.scss'

interface TrackHeroProps {
	region: string
	title: string
	author: string
	authorId: string
	createdAt: string
	image: string
}

export function TrackHero({ title, region, author, authorId, createdAt, image }: TrackHeroProps) {
	const date = new Date(createdAt).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })

	const router = useRouter()

	const handleBack = () => {
		router.back()
	}

	return (
		<div className='post-hero'>
			<img id='postHeroImg' src={image} alt={title} />
			<div className='post-hero-overlay'></div>
			<div className='post-hero-content'>
				<div className='container'>
					<div className='d-flex align-items-center gap-2 mb-2'>
						<Link
							href='#'
							onClick={handleBack}
							style={{ color: 'rgba(255,255,255,.7)', fontSize: '.85rem' }}
						>
							<FaArrowLeft /> Лента
						</Link>
						<span style={{ color: 'rgba(255,255,255,.4)' }}>/</span>
						<span id='postRegion' className={style.track_hero_region}>
							{region}
						</span>
					</div>
					<h1 id='postTitle' className={style.track_hero_title}>
						{title}
					</h1>
					<div className='d-flex gap-3 flex-wrap align-items-center'>
						<span className={style.track_hero_info}>
							<FaUser className='me-2' />
							<Link href={PUBLIC_URL.user(authorId)} style={{ cursor: 'pointer' }} id='postAuthorHero'>
								{author}
							</Link>
						</span>
						<span className={style.track_hero_info}>
							<FaCalendar className='me-2' />
							<span id='postDate'>{date}</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
