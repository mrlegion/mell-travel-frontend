import Link from 'next/link'

import { PUBLIC_URL } from '@/config/url.config'

import style from './HomeOpenRegion.module.css'

interface OpenRegionItemProps {
	title: string
	image: string
	count: number
}

export function OpenRegionItem({ title, image, count }: OpenRegionItemProps) {
	return (
		<div className='col-6 col-md-3'>
			<Link
				href={PUBLIC_URL.feed(`?region=${title}`)}
				className={`d-block position-relative rounded-mell overflow-hidden ${style.home_open_region_item_link}`}
				style={{ height: '200px' }}
			>
				<img src={image} alt={title} />
				<div className={style.home_open_region_item_shadow}></div>
				<div className={style.home_open_region_item_block}>
					<div className={style.home_open_region_item_block_count}>
						<span className='region-count' data-region={title}>
							{`${count} `}
						</span>
						маршрутов
					</div>
					<div className={style.home_open_region_item_block_title}>{title}</div>
				</div>
			</Link>
		</div>
	)
}
