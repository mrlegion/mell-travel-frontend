export function TrackSupportInfo() {
    return (
		<div
			className='mt-4 p-4 rounded-mell'
			style={{
				background: 'var(--sky-light)',
				border: '1px solid rgba(122,184,212,.3)'
			}}
		>
			<h6
				style={{
					color: '#4a90b8',
					fontWeight: 700,
					marginBottom: '.75rem'
				}}
			>
				<i className='fa-solid fa-lightbulb me-2'></i>Советы для хорошего отчёта
			</h6>
			<ul
				style={{
					fontSize: '.88rem',
					color: 'var(--gray-dark)',
					lineHeight: 1.8,
					margin: 0,
					paddingLeft: '1.2rem'
				}}
			>
				<li>Добавьте практическую информацию: как добраться, сколько стоит, где ночевать</li>
				<li>Опишите сложные участки — предупредите будущих путешественников</li>
				<li>Укажите лучшее время для посещения и погодные условия</li>
				<li>Рекомендуемое снаряжение и одежда</li>
			</ul>
		</div>
	)
}