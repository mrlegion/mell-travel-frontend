import { ITrackView } from '@/shared/types/track.interface'

export interface IFavorite {
	id: string
	track: ITrackView
}

export type TFavoriteOperation = 'add' | 'remove'

export interface IFavoriteChange {
	trackId: string
	operation: TFavoriteOperation
}
