'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

import { TabFavoriteTrack } from '@/app/(root)/profile/profile-tabs/TabFavoriteTrack'
import { TabMyTrack } from '@/app/(root)/profile/profile-tabs/TabMyTrack'
import { TabSettings } from '@/app/(root)/profile/profile-tabs/TabSettings'
import { TabsHeader } from '@/app/(root)/profile/profile-tabs/TabsHeader'

import { profileService } from '@/services/profile.service'

import { ITrack } from '@/shared/types/track.interface'

interface ProfileTabsProps {
	myTracks: ITrack[]
	favorites: ITrack[]
	settings: {
		name: string
		bio: string
		avatar: string
		notificationNewComments: boolean
		notificationLikes: boolean
		notificationNewTrackInFavorites: boolean
	}
}

type TTab = 'my' | 'favorites' | 'settings'

export function ProfileTabs({ myTracks, favorites, settings }: ProfileTabsProps) {
	const [tab, setTab] = useState<TTab>('my')

	const queryClient = useQueryClient()

	const [setting, setSettings] = useState({
		name: settings?.name || '',
		bio: settings?.bio || '',
		avatar: settings?.avatar || '',
		notificationNewComments: settings.notificationNewComments,
		notificationLikes: settings.notificationLikes,
		notificationNewTrackInFavorites: settings.notificationNewTrackInFavorites
	})

	const { mutate } = useMutation({
		mutationKey: ['update profile info'],
		mutationFn: (updatedData: typeof setting) =>
			profileService.update({
				name: updatedData.name,
				bio: updatedData.bio,
				notificationNewComments: updatedData.notificationNewComments,
				notificationLikes: updatedData.notificationLikes,
				notificationNewTrackInFavorites: updatedData.notificationNewTrackInFavorites,
				avatar: updatedData.avatar
			}),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['profile']
			})
			toast.success('Данные успешно обновлены')
		},
		onError: (error: any) => {
			toast.error(error.response?.data?.message || 'Ошибка обновления данных')
		}
	})

	const handleSettingsUpdate = (updatedData: typeof setting) => {
		setSettings(updatedData)
		mutate(updatedData)
	}

	const onTabClick = (name: TTab) => {
		setTab(name)
	}

	return (
		<section className='section-pad bg-off-white'>
			<div className='container'>
				<TabsHeader onClick={onTabClick} activeTab={tab} />
				<TabMyTrack tracks={myTracks} active={tab} />
				<TabFavoriteTrack tracks={favorites} active={tab} />
				<TabSettings {...settings} active={tab} onUpdate={handleSettingsUpdate} />
			</div>
		</section>
	)
}
