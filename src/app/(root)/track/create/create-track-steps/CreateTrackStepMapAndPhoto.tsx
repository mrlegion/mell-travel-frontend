'use client'

import dynamic from 'next/dynamic'
import { UseFormRegister } from 'react-hook-form'
import { FaArrowLeft, FaPaperPlane } from 'react-icons/fa6'

import type { StepData } from '@/app/(root)/track/create/create-track-steps/step.types'

const MapWithNoSSR = dynamic(() => import('./MapComponent'), { ssr: false })

interface CreateTrackStepMapAndPhotoProps {
	handleMapClick: (lat: number, lng: number) => void
	markerPosition: [number, number] | null
	register: UseFormRegister<StepData>
	onPrevStep: () => void
}

export function CreateTrackStepMapAndPhoto({
	register,
	markerPosition,
	handleMapClick,
	onPrevStep
}: CreateTrackStepMapAndPhotoProps) {
	return (
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
						placeholder={[
							'https://images.unsplash.com/photo-xxx&#10',
							'https://images.unsplash.com/photo-yyy'
						].join('\n')}
						rows={4}
						{...register('images')}
					/>
				</div>

				<div className='d-flex justify-content-between mt-4'>
					<button type='button' className='btn-outline-green' onClick={onPrevStep}>
						<FaArrowLeft /> Назад
					</button>
					<button type='submit' className='btn-primary-green'>
						<FaPaperPlane /> Опубликовать
					</button>
				</div>
			</div>
		</div>
	)
}
