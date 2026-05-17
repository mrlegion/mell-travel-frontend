import { RulesBlock } from '@/app/(root)/rules/rules-block/RulesBlock'
import { RulesFAQ } from '@/app/(root)/rules/rules-faq/RulesFAQ'
import { RulesHero } from '@/app/(root)/rules/rules-hero/RulesHero'

export function Rules() {
	return (
		<>
			<RulesHero />
			<section className='section-pad bg-off-white'>
				<div className='container'>
					<RulesBlock />
					<RulesFAQ />
				</div>
			</section>
		</>
	)
}
