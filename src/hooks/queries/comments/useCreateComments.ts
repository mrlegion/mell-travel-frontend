import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

import { commentService } from '@/services/comment.service'

export const useCreateComments = (trackId: string) => {
	const queryClient = useQueryClient()

	const { mutate: createComment, isPending: isCreating } = useMutation({
		mutationKey: ['create-comment', trackId],
		mutationFn: (text: string) => commentService.create(trackId, { text }),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['comments', trackId]
			})

			toast.success('Комментарий добавлен')
		},
		onError(error: any) {
			toast.error(error?.response?.data?.message || 'Ошибка при добавлении комментария')
		}
	})

	return {
		createComment,
		isCreating
	}
}
