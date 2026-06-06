import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

import { likeService } from '@/services/likes.service'

export const useSetLikeToTrack = () => {
	const queryClient = useQueryClient()

	const { mutate: toggleLike, isPending: isLoadingToggleLike } = useMutation({
		mutationKey: ['set like to track'],
		mutationFn: (trackId: string) => likeService.toggle({ trackId }),
		onSuccess(data) {
			console.log(data)
			if (data.liked) {
				toast.success('Отмечено как понравившееся')
			} else {
				toast.success('Отметка снята')
			}

			queryClient.invalidateQueries({
				queryKey: ['profile']
			})
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
