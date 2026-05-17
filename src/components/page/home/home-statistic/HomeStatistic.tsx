import { StatisticCard } from '@/components/page/home/home-statistic/StatisticCard'

export function HomeStatistic() {
	return (
		<section className='section-pad-sm bg-white'>
			<div className='container'>
				<div className='stat-band'>
					<div className='row g-4 align-items-center'>
						<StatisticCard num='84%' desc='россиян планируют путешествия самостоятельно, без турагентств' />
						<StatisticCard
							num='+47%'
							desc='рост внутреннего туризма за последние три года по данным Ростуризма'
						/>
						<StatisticCard num='93%' desc='пользователей рекомендуют MellTravel друзьям' />
					</div>
				</div>
			</div>
		</section>
	)
}
