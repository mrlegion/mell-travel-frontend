import { Communication } from '@/app/(root)/rules/rules-block/Communication'
import { Publication } from '@/app/(root)/rules/rules-block/Publication'

export function RulesBlock() {
	return (
		<div className='row g-5'>
			<Publication />
			<Communication />
		</div>
	)
}
