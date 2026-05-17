import { PropsWithChildren } from 'react'

import { Footer } from '@/components/layout/footer/Footer'
import { HeaderMenu } from '@/components/layout/main-layout/header-menu/HeaderMenu'

export function MainLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<>
			<HeaderMenu />
			{children}
			<Footer />
		</>
	)
}
