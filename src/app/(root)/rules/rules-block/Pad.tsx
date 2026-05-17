import { PadItem } from './PadItem'
import styleModule from './RulesBlock.module.css'

interface PadProps {
	label: string
	title: string
	items: PadItem[]
}

interface PadItem {
	number: number
	title: string
	subtitle: string
}

export function Pad({ label, title, items }: PadProps) {
	return (
		<div className={`col-lg-6`}>
			<span className='section-label'>{label}</span>
			<h2 className={`section-title ${styleModule.rules_block_title}`}>{title}</h2>
			<div className='divider-fancy'></div>
			{items.map((item, index) => (
				<PadItem {...item} key={index} />
			))}
		</div>
	)
}
