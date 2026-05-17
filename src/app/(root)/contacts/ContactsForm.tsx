'use client'

import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { FaPaperPlane, FaSpinner } from 'react-icons/fa6'

interface IContacts {
	name: string
	email: string
	subject: string
	message: string
}

export function ContactsForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting }
	} = useForm<IContacts>({
		defaultValues: {
			name: '',
			email: '',
			subject: 'Вопрос о платформе',
			message: ''
		}
	})

	const mutation = useMutation({
		mutationFn: async (data: IContacts) => {}, // тут идет отправка на сервер
		onSuccess: () => {
			toast.success('Сообщение успешно отправлено')
			reset()
		},
		onError: error => {
			toast.error(error.message || 'Произошла ошибка при отправке формы')
		}
	})

	const onSubmit = (data: IContacts) => {
		mutation.mutate(data)
	}

	return (
		<div className='col-lg-6'>
			<div className='why-card'>
				<h4 style={{ fontFamily: "'Playfair Display', serif", marginBottom: '1.5rem' }}>
					Форма обратной связи
				</h4>
				<form onSubmit={handleSubmit(onSubmit)} id='contactForm'>
					<div className='row g-3'>
						<div className='col-md-6'>
							<label
								style={{
									fontSize: '.88rem',
									fontWeight: 600,
									display: 'block',
									marginBottom: '.4rem'
								}}
							>
								Имя
							</label>
							<input
								{...register('name', {
									required: 'Имя обязательно для заполнения',
									minLength: {
										value: 2,
										message: 'Имя должно содержать минимум 2 символа'
									}
								})}
								className={`form-control-mell ${errors.name ? 'is-invalid' : ''}`}
								placeholder='Ваше имя'
							/>
							{errors.name && <div className='invalid-feedback'>{errors.name.message}</div>}
						</div>

						<div className='col-md-6'>
							<label
								style={{
									fontSize: '.88rem',
									fontWeight: 600,
									display: 'block',
									marginBottom: '.4rem'
								}}
							>
								Email
							</label>
							<input
								{...register('email', {
									required: 'Email обязателен для заполнения',
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: 'Неверный формат email'
									}
								})}
								className={`form-control-mell ${errors.email ? 'is-invalid' : ''}`}
								placeholder='email@example.ru'
							/>
							{errors.email && <div className='invalid-feedback'>{errors.email.message}</div>}
						</div>

						<div className='col-12'>
							<label
								style={{
									fontSize: '.88rem',
									fontWeight: 600,
									display: 'block',
									marginBottom: '.4rem'
								}}
							>
								Тема обращения
							</label>
							<select {...register('subject')} className='form-control-mell'>
								<option value='Вопрос о платформе'>Вопрос о платформе</option>
								<option value='Проблема с публикацией'>Проблема с публикацией</option>
								<option value='Сообщить о нарушении'>Сообщить о нарушении</option>
								<option value='Предложение по улучшению'>Предложение по улучшению</option>
								<option value='Техническая ошибка'>Техническая ошибка</option>
								<option value='Сотрудничество'>Сотрудничество</option>
							</select>
						</div>

						<div className='col-12'>
							<label
								style={{
									fontSize: '.88rem',
									fontWeight: 600,
									display: 'block',
									marginBottom: '.4rem'
								}}
							>
								Сообщение
							</label>
							<textarea
								{...register('message', {
									required: 'Сообщение обязательно для заполнения',
									minLength: {
										value: 10,
										message: 'Сообщение должно содержать минимум 10 символов'
									}
								})}
								className={`form-control-mell ${errors.message ? 'is-invalid' : ''}`}
								rows={5}
								placeholder='Опишите ваш вопрос подробно...'
							/>
							{errors.message && <div className='invalid-feedback'>{errors.message.message}</div>}
						</div>

						<div className='col-12'>
							<button
								type='submit'
								className='btn-primary-green w-100'
								disabled={mutation.isPending || isSubmitting}
							>
								{mutation.isPending || isSubmitting ? (
									<>
										<FaSpinner /> Отправка...
									</>
								) : (
									<>
										<FaPaperPlane /> Отправить сообщение
									</>
								)}
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
