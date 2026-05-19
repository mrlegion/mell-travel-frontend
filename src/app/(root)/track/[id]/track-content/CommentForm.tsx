import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { FaPaperPlane } from 'react-icons/fa6'

import { useCreateComments } from '@/hooks/queries/comments/useCreateComments'

import { ICommentCreate } from '@/shared/types/comment.interface'

interface CommentFormProps {
	trackId: string
}

export function CommentForm({ trackId }: CommentFormProps) {
	const { createComment, isCreating } = useCreateComments(trackId)

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isDirty, isValid }
	} = useForm<ICommentCreate>({
		defaultValues: {
			text: ''
		},
		mode: 'onChange'
	})

	const onSubmit = async (data: ICommentCreate) => {
		try {
			createComment(data.text)
			reset()
		} catch (error: any) {
			toast.error(error.response?.data?.message || 'Ошибка отправки формы')
		}
	}

	return (
		<div className='comment-form-wrap'>
			<h6 style={{ fontWeight: '600', marginBottom: '1rem' }}>Оставить комментарий</h6>
			<form id='commentForm' onSubmit={handleSubmit(onSubmit)}>
				<div className='row g-3'>
					<div className='col-12'>
						<textarea
							id='commentText'
							className={`form-control-mell ${errors.text ? 'is-invalid' : ''}`}
							rows={5}
							placeholder='Поделитесь впечатлением или задайте вопрос...'
							disabled={isCreating}
							{...register('text', {
								required: 'Комментарий не может быть пустым',
								minLength: {
									value: 10,
									message: 'Комментарий должен содержать минимум 100 символа'
								},
								maxLength: {
									value: 1000,
									message: 'Комментарий не может превышать 1000 символов'
								}
							})}
						></textarea>
						{errors.text && <div className='invalid-feedback'>{errors.text.message}</div>}
					</div>
					<div className='col-12'>
						<button
							type='submit'
							className='btn-primary-green'
							disabled={isCreating || !isDirty || !isValid}
						>
							{isCreating ? (
								<>
									<span className='spinner-border spinner-border-sm me-1'></span>
									Отправка...
								</>
							) : (
								<>
									<FaPaperPlane /> Отправить
								</>
							)}
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}
