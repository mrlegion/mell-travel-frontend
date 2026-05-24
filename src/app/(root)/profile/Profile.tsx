'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { ProfileHero } from '@/app/(root)/profile/profile-hero/ProfileHero'
import { ProfileTabs } from '@/app/(root)/profile/profile-tabs/ProfileTabs'

import { PUBLIC_URL } from '@/config/url.config'

import { useGetFavoriteTrack } from '@/hooks/queries/favorites/useGetFavoriteTrack'
import { useGetUserTracks } from '@/hooks/queries/tracks/useGetUserTracks'
import { useProfile } from '@/hooks/useProfile'

export function Profile() {
	const { user } = useProfile()
	const { tracks } = useGetUserTracks()
	const { favorites } = useGetFavoriteTrack(user?.id)
	const [likes, setLikes] = useState<number>(0)

	useEffect(() => {
		setLikes(Math.floor(Math.random() * (0 - 150 + 1)) + 150)
	}, [])

	const tracksCount = tracks ? tracks.length : 0

	const myTrack = tracks ? tracks : []

	if (!user) return null

	return (
		<>
			<ProfileHero user={user} tracksCount={tracksCount} likes={likes} />
			<ProfileTabs
				myTracks={myTrack}
				favorites={favorites?.tracks}
				settings={{
					id: user.id,
					name: user.name,
					bio: user.bio,
					avatar: user.avatar,
					notificationLikes: user.notificationLikes,
					notificationNewComments: user.notificationNewComments,
					notificationNewTrackInFavorites: user.notificationNewTrackInFavorites
				}}
			/>
		</>
	)
}
