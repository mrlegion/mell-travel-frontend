export interface Like {
	id: string
	accountId: string
	trackId: string
	createdAt: string
	updatedAt: string
}

export interface LikeToggle {
	trackId: string
}

export interface ILikeResponse {
	likes: boolean
	trackId: string
}
