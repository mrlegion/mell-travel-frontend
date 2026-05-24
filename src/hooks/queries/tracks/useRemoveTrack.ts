import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

import { PUBLIC_URL } from '@/config/url.config'

import { trackService } from '@/services/track.service'

export const useRemoveTrack = (trackId: string) => {
	const queryClient = useQueryClient()
	const router = useRouter()

	const { mutate: removeTrack, isPending: isLoadingRemove } = useMutation({
		mutationKey: ['remove track', trackId],
		mutationFn: () => trackService.remove(trackId),
		onSuccess(data: boolean) {
			if (data) {
				router.push(PUBLIC_URL.feed())
				toast.success('Маршрут успешно удален')
			}

			queryClient.invalidateQueries({
				queryKey: ['get all track']
			})
		},
		onError(error: any) {
			toast.error(error?.response?.data?.message || 'Ошибка удаления маршрута')
		},
		retryDelay: 1000 * 5,
		retry: 1
	})

	return {
		removeTrack,
		isLoadingRemove
	}
}
