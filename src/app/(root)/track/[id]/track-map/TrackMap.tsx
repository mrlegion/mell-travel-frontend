'use client'

import 'leaflet/dist/leaflet.css'
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'

// Динамический импорт компонентов Leaflet
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false })

const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false })

const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false })

const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false })

interface TrackMapProps {
	lat: number
	lng: number
	title: string
	className?: string
	style?: React.CSSProperties
}

export function TrackMap({ lat, lng, title, className, style }: TrackMapProps) {
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	// Создание кастомной иконки для маркера
	const createCustomIcon = () => {
		if (typeof window !== 'undefined') {
			const L = require('leaflet')
			return L.divIcon({
				html: `<div style="background:var(--sage-dark,#6b8f52);width:16px;height:16px;border-radius:50%;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,.3)"></div>`,
				iconSize: [16, 16],
				className: 'custom-marker-icon'
			})
		}
		return undefined
	}

	const mapStyle = {
		height: '100%',
		width: '100%',
		borderRadius: '16px',
		overflow: 'hidden',
		...style
	} as React.CSSProperties

	if (!isClient) {
		return (
			<div style={mapStyle}>
				<div
					style={{
						height: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: '#f0f0f0'
					}}
				>
					Загрузка карты...
				</div>
			</div>
		)
	}

	if (!lat || !lng) {
		return (
			<div style={mapStyle}>
				<div
					style={{
						height: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: '#f0f0f0',
						color: '#666'
					}}
				>
					Координаты не указаны
				</div>
			</div>
		)
	}

	return (
		<div className={className} style={mapStyle}>
			<MapContainer
				center={[lat, lng]}
				zoom={10}
				style={{ height: '100%', width: '100%' }}
				scrollWheelZoom={false}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker position={[lat, lng]} icon={createCustomIcon()}>
					<Popup>
						<strong>{title}</strong>
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	)
}
