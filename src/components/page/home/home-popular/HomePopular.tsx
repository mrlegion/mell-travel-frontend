'use client'

import { TrackListItem } from '@/components/ui'

import { useGetMostPopularTrack } from '@/hooks/queries/tracks/useGetMostPopularTrack'

export function HomePopular() {
	const { mostPopulars } = useGetMostPopularTrack()

	return (
		<section className='section-pad bg-off-white'>
			<div className='container'>
				<div className='row align-items-end mb-5'>
					<div className='col'>
						<span className='section-label'>Популярные маршруты 2025</span>
						<h2 className='section-title'>Куда едут этим летом</h2>
						<div className='divider-fancy'></div>
						<p className='section-subtitle'>
							Самые читаемые отчёты, отобранные редакцией и сообществом за последние 30 дней
						</p>
					</div>
					<div className='col-auto'>
						<a href='feed.html' className='btn-outline-green'>
							Все публикации <i className='fa-solid fa-arrow-right'></i>
						</a>
					</div>
				</div>
				<div className='row g-4' id='featuredPosts'>
					{mostPopulars && mostPopulars.map((item, index) => <TrackListItem track={item} key={index} />)}
				</div>
			</div>
		</section>
	)
}
