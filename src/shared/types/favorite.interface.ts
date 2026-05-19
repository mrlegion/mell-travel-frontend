import { ITrackView } from '@/shared/types/track.interface'

export interface IFavorite {
	id: string
	track: ITrackView
}

export interface IFavoriteUser {
	user: string
	tracks: ITrackView[]
}

export type TFavoriteOperation = 'add' | 'remove'

export interface IFavoriteToggle {
	trackId: string
}

export interface IFavoriteToggleResponse {
	success: boolean
}
