'use client'

import { useEffect, useState } from 'react'

import { ProfileViewTabs } from '@/app/(root)/profile/[id]/ProfileViewTabs'
import { ProfileHero } from '@/app/(root)/profile/profile-hero/ProfileHero'
import { ProfileTabs } from '@/app/(root)/profile/profile-tabs/ProfileTabs'

import { useGetFavoriteTrack } from '@/hooks/queries/favorites/useGetFavoriteTrack'

import { ITrack } from '@/shared/types/track.interface'
import { IUser } from '@/shared/types/user.interface'

interface ProfileViewProps {
	user: IUser
	tracks: ITrack[]
}

export function ProfileView({ user, tracks }: ProfileViewProps) {
	const counts = tracks ? tracks.length : 0
	const [likes, setLikes] = useState<number>(0)

	useEffect(() => {
		setLikes(Math.floor(Math.random() * (0 - 150 + 1)) + 150)
	}, [])

	const { favorites } = useGetFavoriteTrack(user.id)

	return (
		<>
			<ProfileHero user={user} tracksCount={counts} likes={likes} />
			<ProfileViewTabs tracks={tracks} favorites={favorites?.tracks} />
		</>
	)
}
