import { HeroTitle } from '@/app/(root)/about/about-hero/HeroTitle'
import { KeyIndicator } from '@/app/(root)/about/about-hero/KeyIndicator'

export function AboutHero() {
	return (
		<div className='about-hero'>
			<div className='container py-5'>
				<div className='row align-items-center g-5'>
					<HeroTitle />
					<KeyIndicator />
				</div>
			</div>
		</div>
	)
}
