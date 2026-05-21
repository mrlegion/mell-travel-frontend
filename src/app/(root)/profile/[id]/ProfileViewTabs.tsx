'use client'

import { useState } from 'react'

import { TabFavoriteTrack } from '@/app/(root)/profile/profile-tabs/TabFavoriteTrack'
import { TabMyTrack } from '@/app/(root)/profile/profile-tabs/TabMyTrack'
import { TabsHeader } from '@/app/(root)/profile/profile-tabs/TabsHeader'

import { ITrack, ITrackView } from '@/shared/types/track.interface'

interface ProfileViewTabsProps {
	tracks: ITrack[]
	favorites: ITrackView[] | undefined
}

type TTab = 'my' | 'favorites' | 'settings'

export function ProfileViewTabs({ favorites, tracks }: ProfileViewTabsProps) {
	const [tab, setTab] = useState<TTab>('my')

	const onTabClick = (name: TTab) => {
		setTab(name)
	}

	return (
		<section className='section-pad bg-off-white'>
			<div className='container'>
				<TabsHeader onClick={onTabClick} activeTab={tab} withoutSettings={true} />
				<TabMyTrack tracks={tracks} active={tab} title='Маршруты пользователя' showCreateBtn={false} />
				<TabFavoriteTrack tracks={favorites} active={tab} />
			</div>
		</section>
	)
}
