'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { StepData } from '@/app/(root)/track/create/create-track-steps/step.types'

import {
	TrackHero,
	TrackIndicators,
	TrackStepHistory,
	TrackStepMain,
	TrackStepMapAndPhoto,
	TrackSupportInfo
} from '@/components/ui'
import { Loader } from '@/components/ui/loader/Loader'

import { PUBLIC_URL } from '@/config/url.config'

import { useUpdateTrack } from '@/hooks/queries/tracks/useUpdateTrack'
import { useProfile } from '@/hooks/useProfile'

import { ITrack } from '@/shared/types/track.interface'

interface IEditTrackProps {
	track: ITrack
	id?: string
}

export function EditTrack({ track, id }: IEditTrackProps) {
	const [activeIndex, setActiveIndex] = useState<number>(1)
	const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(null)

	const router = useRouter()
	const { user } = useProfile()
	useEffect(() => {
		if (user && track.account.id !== user.id) {
			router.push(PUBLIC_URL.feed())
		}

		setMarkerPosition([track.lat, track.lng])
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
			lat: track.lat,
			lng: track.lng,
			title: track.title,
			region: track.region,
			tags: track.tags.join(', '),
			text: track.text,
			images: track.images,
			duration: track.duration
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

	const handleMapClick = (lat: number, lng: number) => {
		setMarkerPosition([lat, lng])
	}

	const { updateTrack, isUpdateLoading } = useUpdateTrack(track.id)

	const onHandleSubmit: SubmitHandler<StepData> = data => {
		console.log(data)

		updateTrack({
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

	return (
		<>
			{isUpdateLoading && <Loader />}
			<TrackHero mode={'edit'} title={track.title} text={track.excerpt} />
			<section className='section-pad bg-off-white'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-8'>
							<TrackIndicators activeIndex={activeIndex} />

							<form onSubmit={handleSubmit(onHandleSubmit)}>
								{activeIndex === 1 && (
									<TrackStepMain register={register} errors={errors} onNexStep={handleNextClick} />
								)}
								{activeIndex === 2 && (
									<TrackStepHistory
										register={register}
										errors={errors}
										onNexStep={handleNextClick}
										onPrevStep={handlePrevClick}
									/>
								)}
								{activeIndex === 3 && (
									<TrackStepMapAndPhoto
										watch={watch}
										setValue={setValue}
										handleMapClick={handleMapClick}
										markerPosition={markerPosition}
										onPrevStep={handlePrevClick}
										btnText='Изменить'
									/>
								)}
							</form>

							<TrackSupportInfo />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
