interface HamburgerButtonProps {
	handleClick: () => void
}

export function HamburgerButton({ handleClick }: HamburgerButtonProps) {
	return (
		<button
			className='navbar-toggler border-0'
			type='button'
			onClick={handleClick}
			data-bs-toggle='collapse'
			data-bs-target='#navMain'
		>
			<span className='navbar-toggler-icon'></span>
		</button>
	)
}
