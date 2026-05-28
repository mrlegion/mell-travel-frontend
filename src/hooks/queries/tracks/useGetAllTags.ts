import { useQuery } from '@tanstack/react-query'

import { trackService } from '@/services/track.service'

export const useGetAllTags = () => {
	const { data, isPending: isTagsLoading } = useQuery({
		queryKey: ['get tags'],
		queryFn: () => trackService.getTags(),
		retry: 1,
		staleTime: 1000 * 60 * 60 * 24
	})

	const tags = data ? data.tags : ['горы', 'трекинг', 'зима', 'водный туризм', 'вулканы', 'природа', 'дикая природа']

	return {
		tags,
		isTagsLoading
	}
}
