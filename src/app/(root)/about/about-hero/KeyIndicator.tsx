'use client'

import { KeyIndicatorItem } from '@/app/(root)/about/about-hero/KeyIndicatorItem'

import { useGetTrackCount } from '@/hooks/queries/tracks/useGetTrackCount'
import { useGetTrackRegionCount } from '@/hooks/queries/tracks/useGetTrackRegionCount'

import style from './AboutHero.module.css'

let keyIndicatorData = [
	{
		value: '0+',
		text: 'маршрутов'
	},
	{
		value: '0',
		text: 'регионов России'
	},
	{
		value: '84%',
		text: 'путешествуют самостоятельно'
	},
	{
		value: '+47%',
		text: 'рост внутреннего туризма'
	}
]

export function KeyIndicator() {
	const { count } = useGetTrackCount()
	const { count: regionCount } = useGetTrackRegionCount()

	if (keyIndicatorData) {
		keyIndicatorData[0].value = `${count}+`
		keyIndicatorData[1].value = `${regionCount}`
	}

	return (
		<div className='col-lg-5'>
			<div className={style.about_hero_key}>
				<div className={style.about_hero_key_title}>Ключевые показатели</div>
				<div className='row g-3'>
					{keyIndicatorData.map((item, index) => (
						<KeyIndicatorItem key={index} {...item} />
					))}
				</div>
			</div>
		</div>
	)
}
