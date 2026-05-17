import { HeroContent } from '@/components/page/home/home-hero/HeroContent'
import { HeroDecoration } from '@/components/page/home/home-hero/HeroDecoration'

export function HomeHero() {
	return (
		<section className='hero'>
			<div className='hero-bg'></div>
			<HeroContent />
			<HeroDecoration />
		</section>
	)
}
