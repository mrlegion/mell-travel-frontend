import { useState } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

import type { StepData } from '@/app/(root)/track/create/create-track-steps/step.types'

interface TrackStepHistoryProps {
	register: UseFormRegister<StepData>
	errors: FieldErrors<StepData>
	onNexStep: () => void
	onPrevStep: () => void
}

export function TrackStepHistory({ register, errors, onNexStep, onPrevStep }: TrackStepHistoryProps) {
	const [textLength, setTextLength] = useState<number>(0)

	return (
		<div className='form-step active' id='step2'>
			<div className='why-card'>
				<h5 style={{ fontFamily: "'Playfair Display',serif", marginBottom: '1.75rem' }}>
					Шаг 2 — История маршрута
				</h5>
				<div className='form-group mb-4'>
					<label htmlFor='postTextInput'>
						Текст отчёта *{' '}
						<span style={{ color: 'var(--gray-mid)', fontWeight: 400 }}>(минимум 100 символов)</span>
					</label>
					<textarea
						className={`form-control-mell ${errors.text ? 'error' : ''}`}
						id='postTextInput'
						placeholder='Расскажите о вашем путешествии...'
						rows={14}
						{...register('text', {
							required: 'Введите текст отчёта',
							onChange: e => {
								setTextLength(e?.target?.value?.length)
							},
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
							{textLength} символов
						</div>
					)}
				</div>

				<div className='d-flex justify-content-between mt-4'>
					<button type='button' className='btn-outline-green' onClick={onPrevStep}>
						<FaArrowLeft /> Назад
					</button>
					<button type='button' className='btn-primary-green' onClick={onNexStep}>
						Далее <FaArrowRight />
					</button>
				</div>
			</div>
		</div>
	)
}
