'use client'

import dynamic from 'next/dynamic'
import { UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form'
import { FaArrowLeft, FaPaperPlane, FaPlus, FaTrash } from 'react-icons/fa6'

import type { StepData } from '@/app/(root)/track/create/create-track-steps/step.types'

import { useUpload } from '@/hooks/useUpload'

const MapWithNoSSR = dynamic(() => import('./MapComponent'), { ssr: false })

interface CreateTrackStepMapAndPhotoProps {
	handleMapClick: (lat: number, lng: number) => void
	markerPosition: [number, number] | null
	onPrevStep: () => void
	setValue: UseFormSetValue<StepData>
	watch: UseFormWatch<StepData>
}

export function CreateTrackStepMapAndPhoto({
	markerPosition,
	handleMapClick,
	onPrevStep,
	setValue,
	watch
}: CreateTrackStepMapAndPhotoProps) {
	const imagesValue = watch('images') || []

	const handleImagesChange = (urls: string[]) => {
		// Объединяем новые URL с существующими
		const currentImages = Array.isArray(imagesValue) ? imagesValue : [imagesValue].filter(Boolean)
		const updatedImages = [...currentImages, ...urls]
		setValue('images', updatedImages)
	}

	const { isUploading, handleButtonClick, handleFileChange, fileInputRef } = useUpload(
		handleImagesChange,
		'track-images'
	)

	const handleAddImages = () => {
		handleButtonClick()
	}

	const handleRemoveImage = (index: number) => {
		const currentImages = Array.isArray(imagesValue) ? imagesValue : [imagesValue].filter(Boolean)
		const updatedImages = currentImages.filter((_: string, i: number) => i !== index)
		setValue('images', updatedImages)
	}

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
					<label>Фотографии маршрута</label>
					<p
						style={{
							fontSize: '.85rem',
							color: 'var(--gray-mid)',
							marginBottom: '.5rem'
						}}
					>
						Загрузите фотографии или вставьте URL (каждый с новой строки)
					</p>

					{(() => {
						const currentImages = Array.isArray(imagesValue) ? imagesValue : [imagesValue].filter(Boolean)
						return (
							currentImages.length > 0 && (
								<div
									className='row g-3 mb-3'
									style={{
										display: 'grid',
										gridTemplateColumns: 'repeat(auto-fill, 150px)',
										gap: '1rem'
									}}
								>
									{currentImages.map((url: string, index: number) => (
										<div
											key={index}
											style={{
												position: 'relative',
												width: '150px',
												height: '150px'
											}}
										>
											<img
												src={url}
												alt={`Preview ${index + 1}`}
												style={{
													width: '100%',
													height: '100%',
													objectFit: 'cover',
													borderRadius: '8px',
													border: '1px solid var(--gray-light)'
												}}
											/>
											<button
												type='button'
												onClick={() => handleRemoveImage(index)}
												style={{
													position: 'absolute',
													top: '5px',
													right: '5px',
													background: 'rgba(0,0,0,0.5)',
													color: 'white',
													border: 'none',
													borderRadius: '50%',
													width: '24px',
													height: '24px',
													cursor: 'pointer',
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center'
												}}
											>
												<FaTrash size={12} />
											</button>
										</div>
									))}
								</div>
							)
						)
					})()}

					<div className='mb-3'>
						<button
							type='button'
							className='btn btn-outline-secondary'
							onClick={handleAddImages}
							disabled={isUploading}
							style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
						>
							<FaPlus /> {isUploading ? 'Загрузка...' : 'Добавить фотографии'}
						</button>
						<input
							type='file'
							ref={fileInputRef}
							onChange={handleFileChange}
							multiple
							accept='image/*'
							style={{ display: 'none' }}
						/>
					</div>
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
