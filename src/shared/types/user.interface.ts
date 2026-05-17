import { IFavorite } from '@/shared/types/favorite.interface'
import { ITrackView } from '@/shared/types/track.interface'

export interface IUser {
	id: string
	email: string
	name: string
	avatar: string
	bio: string
	notificationNewComments: boolean
	notificationLikes: boolean
	notificationNewTrackInFavorites: boolean
	tracks: ITrackView[]
	favorites: IFavorite[]
}

export interface IUserUpdate extends Omit<IUser, 'id' | 'email' | 'tracks' | 'favorites'> {}

export interface IAuthor extends Pick<IUser, 'id' | 'name' | 'email' | 'avatar'> {}

export interface IUserUpdateResponse {
	success: boolean
}
