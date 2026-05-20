import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { FaArrowRight } from 'react-icons/fa6'

import type { StepData } from '@/app/(root)/track/create/create-track-steps/step.types'

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

interface CreateTrackStepMainProps {
	register: UseFormRegister<StepData>
	errors: FieldErrors<StepData>
	onNexStep: () => void
}

export function CreateTrackStepMain({ register, errors, onNexStep }: CreateTrackStepMainProps) {
	return (
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
							<select className='form-control-mell' id='postDifficultyInput' {...register('difficulty')}>
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
					<button type='button' className='btn-primary-green' onClick={onNexStep}>
						Далее <FaArrowRight />
					</button>
				</div>
			</div>
		</div>
	)
}
