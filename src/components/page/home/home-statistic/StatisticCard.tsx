interface StatisticCardProps {
	num: string
	desc: string
}

export function StatisticCard({ num, desc }: StatisticCardProps) {
	return (
		<div className='col-md-4 text-center'>
			<div className='stat-num'>{num}</div>
			<div className='stat-desc'>{desc}</div>
		</div>
	)
}
