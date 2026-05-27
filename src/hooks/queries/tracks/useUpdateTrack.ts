import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

import { PUBLIC_URL } from '@/config/url.config'

import { trackService } from '@/services/track.service'

import { ITrackUpdate } from '@/shared/types/track.interface'

export const useUpdateTrack = (id: string) => {
	const router = useRouter()

	const { mutate: updateTrack, isPending: isUpdateLoading } = useMutation({
		mutationKey: ['update track', id],
		mutationFn: (data: ITrackUpdate) => trackService.update(id, data),
		onSuccess(data) {
			if (data) {
				router.push(PUBLIC_URL.track(id))
				toast.success('Маршрут успешно обновлен')
			} else {
				toast.error('Ошибка при обновлении марштура')
			}
		},
		onError(error: any) {
			toast.error(error?.response?.data?.message || 'Ошибка при обновлении марштура')
		}
	})

	return {
		updateTrack,
		isUpdateLoading
	}
}
