import { axiosClassic, axiosWithAuth } from '@/api/api.interceptors'

import { API_URL } from '@/config/api.config'

import type { IComment, ICommentCreate } from '@/shared/types/comment.interface'

class CommentService {
	// ============================================================
	//   Получение списка комментариев к маршруту
	// ============================================================
	public async getByTrack(trackId: string) {
		const { data } = await axiosClassic<IComment[]>({
			url: API_URL.comments(`/by-track/${trackId}`),
			method: 'GET'
		})

		return data || []
	}

	// ============================================================
	//   Получение списка комментариев пользователя
	// ============================================================
	public async getByUser(userId: string) {
		const { data } = await axiosClassic<IComment[]>({
			url: API_URL.comments(`/by-user/${userId}`),
			method: 'GET'
		})

		return data || []
	}

	// ============================================================
	//   Получение списка комментариев текущего пользователя
	// ============================================================
	public async getByMe() {
		const { data } = await axiosWithAuth<IComment[]>({
			url: API_URL.comments(),
			method: 'GET'
		})

		return data || []
	}

	// ============================================================
	//   Добавление нового комментария к маршруту
	// ============================================================
	public async create(trackId: string, data: ICommentCreate) {
		const { data: createdComment } = await axiosWithAuth<IComment>({
			url: API_URL.comments(`/${trackId}`),
			method: 'POST',
			data
		})

		return createdComment
	}
}

export const commentService = new CommentService()
