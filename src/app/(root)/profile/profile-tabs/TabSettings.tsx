import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

import style from '../Profile.module.scss'

interface SettingsFormData {
	name: string
	bio: string
	avatar: string
	notificationNewComments: boolean
	notificationLikes: boolean
	notificationNewTrackInFavorites: boolean
}

interface TabSettingsProps {
	name: string
	bio: string
	avatar: string
	notificationNewComments: boolean
	notificationLikes: boolean
	notificationNewTrackInFavorites: boolean
	active: 'my' | 'favorites' | 'settings'
	onUpdate?: (data: SettingsFormData) => void
}

export function TabSettings({
	name,
	bio,
	avatar,
	notificationNewComments,
	notificationLikes,
	notificationNewTrackInFavorites,
	active,
	onUpdate
}: TabSettingsProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<SettingsFormData>({
		defaultValues: {
			name,
			bio,
			avatar,
			notificationNewComments,
			notificationLikes,
			notificationNewTrackInFavorites
		},
		mode: 'onChange'
	})

	const onSubmit = (data: SettingsFormData) => {
		onUpdate?.(data)
	}

	return (
		<div id='pane-settings' className='tab-pane' style={{ display: active === 'settings' ? 'block' : 'none' }}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='row g-4'>
					<div className='col-lg-6'>
						<div className='why-card'>
							<h6 className={style.profile_form_title}>Личные данные</h6>
							<div className='row g-3'>
								<div className='col-12'>
									<label className='form-group'>
										<span className={style.profile_form_label}>Имя</span>
									</label>
									<input
										type='text'
										className='form-control-mell'
										id='profileName'
										{...register('name', {
											required: 'Имя обязательно',
											minLength: {
												value: 2,
												message: 'Имя должно содержать минимум 2 символа'
											},
											maxLength: {
												value: 50,
												message: 'Имя не должно превышать 50 символов'
											}
										})}
									/>
									{errors.name && <span className='text-danger'>{errors.name.message}</span>}
								</div>
								<div className='col-12'>
									<label className='form-group'>
										<span className={style.profile_form_label}>Аватар (URL)</span>
									</label>
									<input
										type='text'
										className='form-control-mell'
										id='profileAvatar'
										{...register('avatar')}
									/>
									{errors.avatar && <span className='text-danger'>{errors.avatar.message}</span>}
								</div>
								<div className='col-12'>
									<label className='form-group'>
										<span className={style.profile_form_label}>О себе</span>
									</label>
									<textarea
										className='form-control-mell'
										rows={3}
										id='profileBio'
										{...register('bio', {
											maxLength: {
												value: 200,
												message: 'Био не должно превышать 200 символов'
											}
										})}
									/>
									{errors.bio && <span className='text-danger'>{errors.bio.message}</span>}
								</div>
								<div className='col-12 d-flex gap-2'>
									<button
										type='submit'
										className='btn-primary-green'
										style={{ width: '100%', justifyContent: 'center' }}
										disabled={Object.keys(errors).length > 0}
									>
										Сохранить изменения
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-6'>
						<div className='why-card'>
							<h6 className={style.profile_form_title}>Уведомления</h6>
							<div className='d-flex flex-column gap-3'>
								<label className='d-flex align-items-center gap-3'>
									<input
										type='checkbox'
										className={style.profile_form_checkbox}
										{...register('notificationNewComments')}
									/>
									<span style={{ fontSize: '.9rem' }}>Новые комментарии к моим публикациям</span>
								</label>
								<label className='d-flex align-items-center gap-3'>
									<input
										type='checkbox'
										className={style.profile_form_checkbox}
										{...register('notificationLikes')}
									/>
									<span style={{ fontSize: '.9rem' }}>Лайки к моим маршрутам</span>
								</label>
								<label className='d-flex align-items-center gap-3'>
									<input
										type='checkbox'
										className={style.profile_form_checkbox}
										{...register('notificationNewTrackInFavorites')}
									/>
									<span style={{ fontSize: '.9rem' }}>Новые маршруты в избранных регионах</span>
								</label>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}
