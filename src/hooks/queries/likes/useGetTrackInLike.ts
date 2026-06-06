import { useQuery } from '@tanstack/react-query'

import { likeService } from '@/services/likes.service'

export const useGetTrackInLike = (trackId: string) => {
	const { data: liked, isLoading } = useQuery({
		queryKey: ['track in like', trackId],
		queryFn: () => likeService.isLiked(trackId),
		enabled: !!trackId,
		retry: 1
	})

	return { liked, isLoading }
}
