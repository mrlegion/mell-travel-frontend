'use client'

import Link from 'next/link'
import { FaMap } from 'react-icons/fa6'

import { OpenRegionItem } from '@/components/page/home/home-open-region/OpenRegionItem'

import { PUBLIC_URL } from '@/config/url.config'

import { useGetRegionWithCount } from '@/hooks/queries/tracks/useGetRegionWithCount'

export function HomeOpenRegion() {
	const { regions } = useGetRegionWithCount()

	return (
		<section className='section-pad' style={{ background: 'linear-gradient(135deg,#1a2f1a,#2d4a2d)' }}>
			<div className='container'>
				<div className='text-center mb-5'>
					<span className='section-label' style={{ color: 'var(--sage-light)' }}>
						Открывайте регионы
					</span>
					<h2 className='section-title' style={{ color: 'white' }}>
						Россия — бесконечное
						<br />
						пространство для открытий
					</h2>
				</div>
				<div className='row g-3'>
					{regions &&
						regions
							.slice(0, 4)
							.map((item, index) => (
								<OpenRegionItem
									title={item.title}
									image={
										item.images?.length > 0
											? item.images[0]
											: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=600'
									}
									count={item.count}
									key={index}
								/>
							))}
				</div>
				<div className='text-center mt-4'>
					<Link href={PUBLIC_URL.mapExplorer()} className='btn-primary-green'>
						<FaMap />
						Открыть карту маршрутов
					</Link>
				</div>
			</div>
		</section>
	)
}
