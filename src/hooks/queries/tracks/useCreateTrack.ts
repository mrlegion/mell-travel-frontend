import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

import { PUBLIC_URL } from '@/config/url.config'

import { trackService } from '@/services/track.service'

import { ITrack, ITrackCreate } from '@/shared/types/track.interface'

export const useCreateTrack = () => {
	const router = useRouter()

	const { mutate: createTrack, isPending: isCreateLoading } = useMutation({
		mutationKey: ['create track'],
		mutationFn: (data: ITrackCreate) => trackService.create(data),
		onSuccess(data: ITrack) {
			router.push(PUBLIC_URL.track(data.id))
			toast.success('Маршрут успешно опубликован')
		},
		onError(error: any) {
			toast.error(error?.response?.data?.message || 'Ошибка публикации маршрута')
		}
	})

	return {
		createTrack,
		isCreateLoading
	}
}
