import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

import { likeService } from '@/services/likes.service'

export const useSetLikeToTrack = () => {
	const { mutate: toggleLike, isPending: isLoadingToggleLike } = useMutation({
		mutationKey: ['set like to track'],
		mutationFn: (trackId: string) => likeService.toggle({ trackId }),
		onSuccess(data) {
			console.log(data)
			if (data.likes) {
				toast.success('Отмечено как понравившееся')
			} else {
				toast.success('Отметка снята')
			}
		},
		onError() {
			toast.error('Ошибка установки отметки нравится маршруту')
		}
	})

	return {
		toggleLike,
		isLoadingToggleLike
	}
}
