import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ProfileView } from '@/app/(root)/profile/[id]/ProfileView'

import { profileService } from '@/services/profile.service'
import { trackService } from '@/services/track.service'


async function getUser(id: string) {
	try {
		const user = await profileService.getById(id)
		const tracks = await trackService.getByUser(id)

		return { user, tracks }
	} catch {
		return notFound()
	}
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
	const { id } = await params
	const { user } = await getUser(id)
	return {
		title: user.name,
		description: user.bio
	}
}

export default async function UserProfile({ params }: { params: { id: string } }) {
	const { id } = await params
	const { user, tracks } = await getUser(id)

	return <ProfileView user={user} tracks={tracks} />
}
