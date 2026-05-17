import { ContactsFAQ } from '@/app/(root)/contacts/ContactsFAQ'
import { ContactsForm } from '@/app/(root)/contacts/ContactsForm'
import { ContactsMethods } from '@/app/(root)/contacts/ContactsMethods'

export function ContractsInfo() {
	return (
		<section className='section-pad bg-off-white'>
			<div className='container'>
				<ContactsMethods />
				<div className='row g-5'>
					<ContactsForm />
					<ContactsFAQ />
				</div>
			</div>
		</section>
	)
}
