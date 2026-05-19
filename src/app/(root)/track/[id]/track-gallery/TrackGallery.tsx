'use client'

import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import { Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'

interface GalleryProps {
	images: string[]
	className?: string
	style?: React.CSSProperties
}

export function TrackGallery({ images, className, style }: GalleryProps) {
	const [open, setOpen] = useState(false)
	const [index, setIndex] = useState(0)

	const slides = images.map(src => ({ src }))

	const openLightbox = (imageIndex: number) => {
		setIndex(imageIndex)
		setOpen(true)
	}

	const galleryStyle = {
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)',
		gap: '0.75rem',
		margin: '2rem 0',
		...style
	} as React.CSSProperties

	return (
		<>
			<div className={className} style={galleryStyle}>
				{images.map((image, index) => (
					<img
						src={image}
						alt={`Фото ${index + 1}`}
						key={index}
						style={{
							width: '100%',
							height: index === 0 ? '380px' : '220px',
							objectFit: 'cover',
							borderRadius: '8px',
							cursor: 'pointer',
							transition: 'all 0.3s ease'
						}}
						onClick={() => openLightbox(index)}
						onMouseEnter={e => {
							;(e.target as HTMLElement).style.opacity = '0.9'
							;(e.target as HTMLElement).style.transform = 'scale(1.01)'
						}}
						onMouseLeave={e => {
							;(e.target as HTMLElement).style.opacity = '1'
							;(e.target as HTMLElement).style.transform = 'scale(1)'
						}}
					/>
				))}
			</div>

			<Lightbox
				open={open}
				close={() => setOpen(false)}
				slides={slides}
				index={index}
				plugins={[Thumbnails, Zoom]}
				animation={{ swipe: 200 }}
			/>
		</>
	)
}
