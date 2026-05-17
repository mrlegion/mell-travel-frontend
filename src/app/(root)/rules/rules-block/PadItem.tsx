import style from './RulesBlock.module.css'

interface PublicationItemProps {
	number: number
	title: string
	subtitle: string
}

export function PadItem({ number, title, subtitle }: PublicationItemProps) {
	return (
		<div className='rule-item'>
			<div className='rule-num'>{number}</div>
			<div>
				<div className={style.rules_block_item_title}>{title}</div>
				<p className={style.rules_block_item_subtitle}>{subtitle}</p>
			</div>
		</div>
	)
}
