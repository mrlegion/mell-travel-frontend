interface CreateTrackStepIndicatorProps {
	activeIndex: number
}

export function CreateTrackStepIndicator({ activeIndex }: CreateTrackStepIndicatorProps) {
	return (
		<>
			<div className='step-indicator'>
				<div className={`step-dot ${activeIndex === 1 ? 'active' : 'done'}`} id='stepDot1'>
					1
				</div>
				<div className='step-line' id='stepLine1'></div>
				<div
					className={`step-dot ${activeIndex === 2 ? 'active' : activeIndex > 2 ? 'done' : ''}`}
					id='stepDot2'
				>
					2
				</div>
				<div className='step-line' id='stepLine2'></div>
				<div
					className={`step-dot ${activeIndex === 3 ? 'active' : activeIndex > 3 ? 'done' : ''}`}
					id='stepDot3'
				>
					3
				</div>
			</div>
			<div
				className='d-flex justify-content-between mb-5 px-2 create_track_indicators'
				style={{ fontSize: '.8rem', color: 'var(--gray-mid)' }}
			>
				<span className={activeIndex === 1 ? 'active' : 'done'}>Основное</span>
				<span className={activeIndex === 2 ? 'active' : activeIndex > 2 ? 'done' : ''}>История</span>
				<span className={activeIndex === 3 ? 'active' : activeIndex > 3 ? 'done' : ''}>Карта и фото</span>
			</div>
		</>
	)
}
