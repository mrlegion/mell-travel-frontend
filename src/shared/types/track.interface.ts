import { IComment } from '@/shared/types/comment.interface'

import { IAuthor } from './user.interface'

export interface ITrack {
	id: string
	title: string
	region: string
	tags: string[]
	text: string
	excerpt: string
	images: string[]
	date: string
	likes: number
	lat: number
	lng: number
	duration: string
	difficulty: string
	comments: IComment[]
	createdAt: string
	updatedAt: string
	account: IAuthor
}

export interface ITrackCreate extends Omit<
	ITrack,
	'id' | 'likes' | 'comments' | 'createdAt' | 'updatedAt' | 'account'
> {}

export interface ITrackView extends Pick<
	ITrack,
	'id' | 'title' | 'region' | 'tags' | 'excerpt' | 'difficulty' | 'images' | 'likes' | 'account'
> {}

export interface IRegion {
	title: string
	count: number
	images: string[]
}

export interface IFilters {
	searchTerm?: string | null
	region?: string | null
	tag?: string | null
	sortBy?: string | null
}
