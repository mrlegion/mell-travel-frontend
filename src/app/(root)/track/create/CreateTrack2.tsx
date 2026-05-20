'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

// Динамическая загрузка Leaflet для избежания проблем с SSR
const MapWithNoSSR = dynamic(() => import('./create-track-steps/MapComponent'), { ssr: false })

type FormStep1 = {
	title: string
	region: string
	difficulty: string
	duration: string
	tags: string
}

type FormStep2 = {
	text: string
}

type FormStep3 = {
	images: string
}

type FormData = FormStep1 &
	FormStep2 &
	FormStep3 & {
		lat: number | null
		lng: number | null
	}

const regions = [
	'Алтай',
	'Байкал',
	'Камчатка',
	'Карелия',
	'Мурманская область',
	'Краснодарский край',
	'Сахалин',
	'Якутия',
	'Другой регион'
]

const difficulties = ['Лёгкий', 'Средний', 'Сложный', 'Экстремальный']

export default function AddPostForm() {
	const [currentStep, setCurrentStep] = useState(1)
	const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(null)

	const {
		register,
		handleSubmit,
		formState: { errors },
		trigger,
		getValues,
		setValue
	} = useForm<FormData>({
		defaultValues: {
			difficulty: 'Средний',
			lat: null,
			lng: null
		}
	})

	const nextStep = async () => {
		let isValid = true

		if (currentStep === 1) {
			isValid = await trigger(['title', 'region'])
		} else if (currentStep === 2) {
			isValid = await trigger(['text'])
		}

		if (isValid) {
			setCurrentStep(prev => prev + 1)
		}
	}

	const prevStep = () => {
		setCurrentStep(prev => prev - 1)
	}

	const onSubmit: SubmitHandler<FormData> = data => {
		// Здесь будет логика отправки данных
		console.log('Отправляем данные:', {
			...data,
			lat: markerPosition?.[0] || 60,
			lng: markerPosition?.[1] || 90
		})

		// Пример сохранения в localStorage (как в оригинальном коде)
		const postData = {
			title: data.title,
			region: data.region,
			tags: data.tags
				.split(',')
				.map(t => t.trim())
				.filter(Boolean),
			difficulty: data.difficulty,
			duration: data.duration,
			text: data.text,
			excerpt: data.text.substring(0, 120) + '...',
			images: data.images
				.split('\n')
				.map(s => s.trim())
				.filter(s => s.startsWith('http')),
			lat: markerPosition?.[0] || 60,
			lng: markerPosition?.[1] || 90,
			date: new Date().toISOString().split('T')[0],
			likes: 0,
			comments: []
		}

		// В реальном приложении здесь будет API вызов
		console.log('Публикация сохранена:', postData)
	}

	// Обновление позиции маркера
	const handleMapClick = (lat: number, lng: number) => {
		setMarkerPosition([lat, lng])
	}

	return (
		<div className='container'>
			<div className='row justify-content-center'>
				<div className='col-lg-8'>
					{/* Индикатор шагов */}
					<div className='step-indicator'>
						{[1, 2, 3].map(step => (
							<div key={step} className='d-flex align-items-center'>
								<div
									className={`step-dot ${currentStep === step ? 'active' : ''} ${step < currentStep ? 'done' : ''}`}
									id={`stepDot${step}`}
								>
									{step}
								</div>
								{step < 3 && (
									<div
										className={`step-line ${step < currentStep ? 'done' : ''}`}
										id={`stepLine${step}`}
									></div>
								)}
							</div>
						))}
					</div>

					<div
						className='d-flex justify-content-between mb-5 px-2'
						style={{ fontSize: '.8rem', color: 'var(--gray-mid)' }}
					>
						<span>Основное</span>
						<span>История</span>
						<span>Карта и фото</span>
					</div>

					<form onSubmit={handleSubmit(onSubmit)}>
						{/* Шаг 1: Основная информация */}
						{currentStep === 1 && (
							<div className='form-step active' id='step1'>
								<div className='why-card'>
									<h5 style={{ fontFamily: "'Playfair Display',serif", marginBottom: '1.75rem' }}>
										Шаг 1 — Основная информация
									</h5>
									<div className='row g-4'>
										<div className='col-12'>
											<div className='form-group'>
												<label htmlFor='postTitleInput'>Название маршрута *</label>
												<input
													className={`form-control-mell ${errors.title ? 'error' : ''}`}
													id='postTitleInput'
													placeholder='Например: Алтай — три недели в горах без связи'
													{...register('title', { required: 'Введите название маршрута' })}
												/>
												{errors.title && (
													<div className='error-msg show' id='titleError'>
														{errors.title.message}
													</div>
												)}
											</div>
										</div>

										<div className='col-md-6'>
											<div className='form-group'>
												<label htmlFor='postRegionInput'>Регион *</label>
												<select
													className={`form-control-mell ${errors.region ? 'error' : ''}`}
													id='postRegionInput'
													{...register('region', { required: 'Выберите регион' })}
												>
													<option value=''>Выберите регион</option>
													{regions.map(region => (
														<option key={region} value={region}>
															{region}
														</option>
													))}
												</select>
												{errors.region && (
													<div className='error-msg show' id='regionError'>
														{errors.region.message}
													</div>
												)}
											</div>
										</div>

										<div className='col-md-6'>
											<div className='form-group'>
												<label htmlFor='postDifficultyInput'>Сложность</label>
												<select
													className='form-control-mell'
													id='postDifficultyInput'
													{...register('difficulty')}
												>
													{difficulties.map(difficulty => (
														<option key={difficulty} value={difficulty}>
															{difficulty}
														</option>
													))}
												</select>
											</div>
										</div>

										<div className='col-md-6'>
											<div className='form-group'>
												<label htmlFor='postDurationInput'>Продолжительность</label>
												<input
													className='form-control-mell'
													id='postDurationInput'
													placeholder='Например: 7 дней'
													{...register('duration')}
												/>
											</div>
										</div>

										<div className='col-md-6'>
											<div className='form-group'>
												<label htmlFor='postTagsInput'>Теги (через запятую)</label>
												<input
													className='form-control-mell'
													id='postTagsInput'
													placeholder='горы, трекинг, природа'
													{...register('tags')}
												/>
											</div>
										</div>
									</div>

									<div className='d-flex justify-content-end mt-4'>
										<button type='button' className='btn-primary-green' onClick={nextStep}>
											Далее <i className='fa-solid fa-arrow-right'></i>
										</button>
									</div>
								</div>
							</div>
						)}

						{/* Шаг 2: История маршрута */}
						{currentStep === 2 && (
							<div className='form-step active' id='step2'>
								<div className='why-card'>
									<h5 style={{ fontFamily: "'Playfair Display',serif", marginBottom: '1.75rem' }}>
										Шаг 2 — История маршрута
									</h5>
									<div className='form-group mb-4'>
										<label htmlFor='postTextInput'>
											Текст отчёта *{' '}
											<span style={{ color: 'var(--gray-mid)', fontWeight: 400 }}>
												(минимум 100 символов)
											</span>
										</label>
										<textarea
											className={`form-control-mell ${errors.text ? 'error' : ''}`}
											id='postTextInput'
											placeholder='Расскажите о вашем путешествии...'
											rows={14}
											{...register('text', {
												required: 'Введите текст отчёта',
												minLength: {
													value: 100,
													message: 'Текст должен содержать не менее 100 символов'
												}
											})}
										/>
										{errors.text ? (
											<div className='error-msg show' id='textError'>
												{errors.text.message}
											</div>
										) : (
											<div
												id='charCounter'
												style={{
													fontSize: '.8rem',
													color: 'var(--gray-mid)',
													marginTop: '.4rem'
												}}
											>
												{getValues('text')?.length || 0} символов
											</div>
										)}
									</div>

									<div className='d-flex justify-content-between mt-4'>
										<button type='button' className='btn-outline-green' onClick={prevStep}>
											<i className='fa-solid fa-arrow-left'></i> Назад
										</button>
										<button type='button' className='btn-primary-green' onClick={nextStep}>
											Далее <i className='fa-solid fa-arrow-right'></i>
										</button>
									</div>
								</div>
							</div>
						)}

						{/* Шаг 3: Карта и фотографии */}
						{currentStep === 3 && (
							<div className='form-step active' id='step3'>
								<div className='why-card'>
									<h5 style={{ fontFamily: "'Playfair Display',serif", marginBottom: '1.75rem' }}>
										Шаг 3 — Карта и фотографии
									</h5>
									<div className='form-group mb-3'>
										<label>Отметьте точку на карте</label>
										<p
											style={{
												fontSize: '.85rem',
												color: 'var(--gray-mid)',
												marginBottom: '.75rem'
											}}
										>
											Кликните на карту, чтобы поставить маркер
										</p>
										<div className='add-post-map' id='addPostMap'>
											<MapWithNoSSR onMapClick={handleMapClick} markerPosition={markerPosition} />
										</div>
										<div
											id='mapLatLng'
											style={{
												fontSize: '.82rem',
												color: 'var(--sage-dark)',
												marginTop: '.5rem',
												fontWeight: 500
											}}
										>
											{markerPosition
												? `📍 ${markerPosition[0].toFixed(4)}, ${markerPosition[1].toFixed(4)}`
												: '📍 Точка не выбрана'}
										</div>
									</div>

									<div className='form-group mt-4'>
										<label htmlFor='postImagesInput'>Ссылки на фотографии</label>
										<p
											style={{
												fontSize: '.85rem',
												color: 'var(--gray-mid)',
												marginBottom: '.5rem'
											}}
										>
											Вставьте URL изображений (каждый с новой строки).
										</p>
										<textarea
											className='form-control-mell'
											id='postImagesInput'
											placeholder='https://images.unsplash.com/photo-xxx&#10;https://images.unsplash.com/photo-yyy'
											rows={4}
											{...register('images')}
										/>
									</div>

									<div className='d-flex justify-content-between mt-4'>
										<button type='button' className='btn-outline-green' onClick={prevStep}>
											<i className='fa-solid fa-arrow-left'></i> Назад
										</button>
										<button type='submit' className='btn-primary-green'>
											<i className='fa-solid fa-paper-plane'></i> Опубликовать
										</button>
									</div>
								</div>
							</div>
						)}
					</form>

					{/* Советы для хорошего отчёта */}
					<div
						className='mt-4 p-4 rounded-mell'
						style={{
							background: 'var(--sky-light)',
							border: '1px solid rgba(122,184,212,.3)'
						}}
					>
						<h6
							style={{
								color: '#4a90b8',
								fontWeight: 700,
								marginBottom: '.75rem'
							}}
						>
							<i className='fa-solid fa-lightbulb me-2'></i>Советы для хорошего отчёта
						</h6>
						<ul
							style={{
								fontSize: '.88rem',
								color: 'var(--gray-dark)',
								lineHeight: 1.8,
								margin: 0,
								paddingLeft: '1.2rem'
							}}
						>
							<li>Добавьте практическую информацию: как добраться, сколько стоит, где ночевать</li>
							<li>Опишите сложные участки — предупредите будущих путешественников</li>
							<li>Укажите лучшее время для посещения и погодные условия</li>
							<li>Рекомендуемое снаряжение и одежда</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
