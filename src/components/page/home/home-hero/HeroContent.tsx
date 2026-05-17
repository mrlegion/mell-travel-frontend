'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaLocationDot } from 'react-icons/fa6'

import { PUBLIC_URL } from '@/config/url.config'

import { useGetRegionName } from '@/hooks/queries/tracks/useGetRegionName'
import { useGetTrackCount } from '@/hooks/queries/tracks/useGetTrackCount'
import { useGetTrackRegionCount } from '@/hooks/queries/tracks/useGetTrackRegionCount'

export function HeroContent() {
	const { count } = useGetTrackCount()
	const { count: region } = useGetTrackRegionCount()
	const { names } = useGetRegionName()

	return (
		<div className='container hero-content py-5'>
			<div className='row'>
				<div className='col-lg-7'>
					<div className='hero-eyebrow animate-up'>
						<FaLocationDot /> Платформа для самостоятельных путешественников
					</div>
					<h1 className='animate-up animate-up-delay-1'>
						Открывайте <span className='accent'>Россию</span>
						<br />
						вместе с теми,
						<br />
						кто уже побывал
					</h1>
					<p className='subtitle animate-up animate-up-delay-2'>
						Живые отчёты о маршрутах, честные советы и вдохновляющие истории от тысяч путешественников — от
						Алтая до Камчатки.
					</p>

					<form id='heroSearchForm' className='hero-search animate-up animate-up-delay-3'>
						<i className='fa-solid fa-magnifying-glass' style={{ color: 'var(--gray-mid)' }}></i>
						<input type='text' id='heroSearchInput' placeholder='Куда хотите отправиться?' />
						<div className='divider'></div>
						<select id='heroRegionSelect' style={{ maxWidth: '160px' }}>
							<option value=''>Все регионы</option>
							{names &&
								names.map((item, key) => (
									<option value={item} key={key}>
										{item}
									</option>
								))}
						</select>
						<Link href={PUBLIC_URL.feed()} className='btn-primary-green'>
							Найти
						</Link>
					</form>

					<div className='hero-stats animate-up animate-up-delay-4'>
						<div className='hero-stat'>
							<span className='num' id='totalRoutesStat'>
								{`${count}+`}
							</span>
							<span className='label'>Маршрутов</span>
						</div>
						<div className='hero-stat'>
							<span className='num'>84%</span>
							<span className='label'>Путешествуют самостоятельно</span>
						</div>
						<div className='hero-stat'>
							<span className='num' id='totalRegionsStat'>
								{region}
							</span>
							<span className='label'>Регионов России</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
