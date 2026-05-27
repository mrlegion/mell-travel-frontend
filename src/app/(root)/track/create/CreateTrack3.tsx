'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { CreateTrackHero } from '@/app/(root)/track/create/create-track-hero/CreateTrackHero'
import { CreateTrackStepIndicator } from '@/app/(root)/track/create/create-track-step-indicator/CreateTrackStepIndicator'
import { CreateTrackStepHistory } from '@/app/(root)/track/create/create-track-steps/CreateTrackStepHistory'
import { CreateTrackStepMain } from '@/app/(root)/track/create/create-track-steps/CreateTrackStepMain'
import { CreateTrackStepMapAndPhoto } from '@/app/(root)/track/create/create-track-steps/CreateTrackStepMapAndPhoto'
import { StepData } from '@/app/(root)/track/create/create-track-steps/step.types'
import { CreateTrackSupportInfo } from '@/app/(root)/track/create/create-track-support-info/CreateTrackSupportInfo'

import { PUBLIC_URL } from '@/config/url.config'

import { useCreateTrack } from '@/hooks/queries/tracks/useCreateTrack'
import { useProfile } from '@/hooks/useProfile'

export function CreateTrack() {
	const [activeIndex, setActiveIndex] = useState<number>(1)
	const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(null)

	const router = useRouter()

	const { user } = useProfile()
	useEffect(() => {
		if (!user) router.push(PUBLIC_URL.auth('/login'))
	}, [])

	const {
		register,
		handleSubmit,
		formState: { errors },
		trigger,
		setValue,
		watch
	} = useForm<StepData>({
		defaultValues: {
			difficulty: 'Средний',
			lat: null,
			lng: null
		}
	})

	const handleNextClick = async () => {
		let isValid = true

		if (activeIndex === 1) {
			isValid = await trigger(['title', 'region'])
		} else if (activeIndex === 2) {
			isValid = await trigger(['text'])
		}

		if (isValid) {
			if (activeIndex === 3) return
			else setActiveIndex(activeIndex + 1)
		}
	}

	const handlePrevClick = () => {
		if (activeIndex === 1) return
		else setActiveIndex(activeIndex - 1)
	}

	const { createTrack, isCreateLoading } = useCreateTrack()

	const onHandleSubmit: SubmitHandler<StepData> = data => {
		console.log(data)

		createTrack({
			title: data.title,
			region: data.region,
			tags: data.tags
				? data.tags.includes(',')
					? data.tags
							.split(',')
							.map(tag => tag.trim())
							.filter(Boolean)
					: [data.tags.trim()].filter(Boolean)
				: [data.tags],
			difficulty: data.difficulty,
			duration: data.duration,
			text: data.text,
			excerpt: data.text.substring(0, 120) + '...',
			images: data.images,
			lat: markerPosition?.[0] || 60,
			lng: markerPosition?.[1] || 90,
			date: new Date().toISOString().split('T')[0]
		})
	}

	const handleMapClick = (lat: number, lng: number) => {
		setMarkerPosition([lat, lng])
	}

	return (
		<>
			<CreateTrackHero />
			<section className='section-pad bg-off-white'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-8'>
							<CreateTrackStepIndicator activeIndex={activeIndex} />

							<form onSubmit={handleSubmit(onHandleSubmit)}>
								{activeIndex === 1 && (
									<CreateTrackStepMain
										register={register}
										errors={errors}
										onNexStep={handleNextClick}
									/>
								)}
								{activeIndex === 2 && (
									<CreateTrackStepHistory
										register={register}
										errors={errors}
										onNexStep={handleNextClick}
										onPrevStep={handlePrevClick}
									/>
								)}
								{activeIndex === 3 && (
									<CreateTrackStepMapAndPhoto
										watch={watch}
										setValue={setValue}
										handleMapClick={handleMapClick}
										markerPosition={markerPosition}
										onPrevStep={handlePrevClick}
									/>
								)}
							</form>

							<CreateTrackSupportInfo />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
