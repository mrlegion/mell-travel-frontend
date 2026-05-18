'use client'

import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { FaSpinner } from 'react-icons/fa6'

import { PUBLIC_URL } from '@/config/url.config'

import { authService } from '@/services/auth/auth.service'

import { IAuthForm } from '@/shared/types/auth.interface'

import style from '../Auth.module.css'

export function AuthRegister() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting }
	} = useForm<IAuthForm>({
		defaultValues: {
			name: '',
			password: '',
			email: ''
		}
	})

	const router = useRouter()

	const mutation = useMutation({
		mutationFn: async (data: IAuthForm) => {
			await authService.main('register', data)
		},
		onSuccess: () => {
			toast.success('Успешная регистрация')
			router.push(PUBLIC_URL.profile())
		},
		onError: (error: any) => {
			toast.error(error.response?.data?.message || 'Ошибка регистрации')
		}
	})

	const onSubmit = (data: IAuthForm) => {
		mutation.mutate(data)
	}

	return (
		<div className={style.auth_body}>
			<div className='register-container'>
				<div className='logo'>
					<Link href={PUBLIC_URL.home()}>
						Mell<span>Travel</span>
					</Link>
				</div>

				<h2 className='form-title'>Регистрация</h2>

				<form id='registerForm' onSubmit={handleSubmit(onSubmit)}>
					<div className='mb-3'>
						<label className='form-label'>Имя</label>
						<input
							{...register('name', {
								required: 'Заполните ваше имя',
								minLength: {
									value: 3,
									message: 'Минимальная длина имени 3 символа'
								}
							})}
							type='text'
							className='form-control-mell'
							placeholder='Как вас зовут?'
						/>
					</div>
					<div className='mb-3'>
						<label className='form-label'>Email</label>
						<input
							{...register('email', {
								required: 'Электронная почта обязательно для заполнения'
							})}
							type='email'
							className='form-control-mell'
							placeholder='email@example.ru'
						/>
					</div>
					<div className='mb-3'>
						<label className='form-label'>Пароль</label>
						<input
							{...register('password', {
								required: 'Введите пароль',
								minLength: {
									value: 8,
									message: 'Минимальная длина пароля 8 символов'
								},
								maxLength: {
									value: 22,
									message: 'Максимальная длина пароля 22 символа'
								}
							})}
							type='password'
							className='form-control-mell'
							placeholder='••••••'
						/>
					</div>
					<button
						type='submit'
						className='btn-primary-green w-100 justify-content-center'
						disabled={mutation.isPending || isSubmitting}
					>
						{mutation.isPending || isSubmitting ? (
							<>
								<FaSpinner /> Отправка...
							</>
						) : (
							'Зарегистрироваться'
						)}
					</button>
				</form>

				<div className='switch-form'>
					Уже есть аккаунт? <Link href={PUBLIC_URL.auth('/login')}>Войти</Link>
				</div>
			</div>
		</div>
	)
}
