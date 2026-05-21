'use client'

import { ProfileHero } from '@/app/(root)/profile/profile-hero/ProfileHero'
import { ProfileTabs } from '@/app/(root)/profile/profile-tabs/ProfileTabs'

import { useGetFavoriteTrack } from '@/hooks/queries/favorites/useGetFavoriteTrack'
import { useGetUserTracks } from '@/hooks/queries/tracks/useGetUserTracks'
import { useProfile } from '@/hooks/useProfile'

import { IFavorite } from '@/shared/types/favorite.interface'

export function Profile() {
	const { user } = useProfile()
	const { tracks } = useGetUserTracks()
	const { favorites } = useGetFavoriteTrack(user?.id)

	const tracksCount = tracks ? tracks.length : 0
	const likes = Math.floor(Math.random() * (0 - 150 + 1)) + 150

	const myTrack = tracks ? tracks : []

	if (!user) return null

	return (
		<>
			<ProfileHero user={user} tracksCount={tracksCount} likes={likes} />
			<ProfileTabs
				myTracks={myTrack}
				favorites={favorites?.tracks}
				settings={{
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
