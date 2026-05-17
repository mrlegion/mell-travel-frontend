import Link from 'next/link'

export function Logo() {
	return (
		<Link href='/' className={'navbar-brand'}>
			Mell<span>Travel</span>
		</Link>
	)
}
