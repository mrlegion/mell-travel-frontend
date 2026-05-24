import { IAuthor } from './user.interface'

export interface IComment {
	id: string
	author: string
	text: string
	createdAt: string
	trackId: string
}

export interface ICommentCreate extends Pick<IComment, 'text'> {}
