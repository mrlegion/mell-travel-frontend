import { useQuery } from '@tanstack/react-query'

import { favoriteService } from '@/services/favorite.service'

export const useGetFavoriteTrack = (userId: string | undefined) => {
	const { data: favorites, isLoading: isLoadingFavorites } = useQuery({
		queryKey: ['favorites', userId],
		queryFn: () => favoriteService.getByUser(userId!),
		enabled: !!userId,
		retry: 2
	})

	return {
		favorites,
		isLoadingFavorites
	}
}
