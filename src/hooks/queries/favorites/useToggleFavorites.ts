import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

import { favoriteService } from '@/services/favorite.service'

export const useToggleFavorites = () => {
	const queryClient = useQueryClient()

	const { mutate: toggleFavorite, isPending: isLoadingToggleFavorites } = useMutation({
		mutationKey: ['toggle favorites'],
		mutationFn: (trackId: string) => favoriteService.toggle({ trackId }),
		onSuccess(data: boolean) {
			queryClient.invalidateQueries({
				queryKey: ['profile']
			})
			if (data) {
				toast.success('Маршрут добавлен в избранное')
			} else {
				toast.success('Маршрут удален из избранного')
			}
		},
		onError() {
			toast.error('Ошибка добавления маршрута в избранное')
		}
	})

	return {
		toggleFavorite,
		isLoadingToggleFavorites
	}
}
