import { AboutCommand } from '@/app/(root)/about/about-command/AboutCommand'
import { AboutContext } from '@/app/(root)/about/about-context/AboutContext'
import { AboutHero } from '@/app/(root)/about/about-hero/AboutHero'
import { AboutOurMission } from '@/app/(root)/about/about-our-mission/AboutOurMission'
import { AboutTechnologies } from '@/app/(root)/about/about-technologies/AboutTechnologies'

export function About() {
	return (
		<>
			<AboutHero />
			<AboutContext />
			<AboutOurMission />
			<AboutTechnologies />
			<AboutCommand />
		</>
	)
}
