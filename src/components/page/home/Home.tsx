import { HomeConnect } from '@/components/page/home/home-connect/HomeConnect'
import { HomeHero } from '@/components/page/home/home-hero/HomeHero'
import { HomeOpenRegion } from '@/components/page/home/home-open-region/HomeOpenRegion'
import { HomePopular } from '@/components/page/home/home-popular/HomePopular'
import { HomeStatistic } from '@/components/page/home/home-statistic/HomeStatistic'
import { HomeWhy } from '@/components/page/home/home-why/HomeWhy'

export function Home() {
	return (
		<>
			<HomeHero />
			<HomeStatistic />
			<HomePopular />
			<HomeWhy />
			<HomeOpenRegion />
			<HomeConnect />
		</>
	)
}
