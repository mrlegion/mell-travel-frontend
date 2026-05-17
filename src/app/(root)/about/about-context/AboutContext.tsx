import { ContextLeft } from '@/app/(root)/about/about-context/ContextLeft'
import { ContextRight } from '@/app/(root)/about/about-context/ContextRight'

export function AboutContext() {
	return (
		<section className='section-pad bg-white'>
			<div className='container'>
				<div className='row g-5 align-items-center'>
					<ContextLeft />
					<ContextRight />
				</div>
			</div>
		</section>
	)
}
