import { useQuery } from '@tanstack/react-query'

import { commentService } from '@/services/comment.service'

export const useGetComments = (trackId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['comments', trackId],
		queryFn: () => commentService.getByTrack(trackId),
		enabled: !!trackId,
		staleTime: 1000 * 60 * 2
	})

	return {
		comments: data,
		isLoading,
		isError
	}
}
