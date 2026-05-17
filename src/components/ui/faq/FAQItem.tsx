interface FAQItemProps {
	question: string
	answer: string
	isOpen: boolean
	onClick: () => void
}

export function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
	return (
		<div className='faq-item'>
			<div className='faq-question' onClick={onClick} style={{ cursor: 'pointer' }}>
				{question}
				<span className='faq-icon'>{isOpen ? '×' : '+'}</span>
			</div>
			<div className={`faq-answer ${isOpen ? 'open' : ''}`}>{answer}</div>
		</div>
	)
}
