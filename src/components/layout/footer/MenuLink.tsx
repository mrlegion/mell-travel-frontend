import Link from 'next/link'

interface MenuLinkProps {
	link: string
	title: string
}
export function MenuLink({ link, title }: MenuLinkProps) {
	return (
		<li>
			<Link style={{ textDecoration: 'none' }} href={link}>
				{title}
			</Link>
		</li>
	)
}
