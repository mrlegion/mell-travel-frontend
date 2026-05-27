import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useRef } from 'react'

interface MapComponentProps {
	onMapClick: (lat: number, lng: number) => void
	markerPosition: [number, number] | null
}

export default function MapComponent({ onMapClick, markerPosition }: MapComponentProps) {
	const mapRef = useRef<HTMLDivElement>(null)
	const mapInstance = useRef<L.Map | null>(null)
	const markerRef = useRef<L.Marker | null>(null)

	useEffect(() => {
		if (!mapRef.current) return

		// Инициализация карты
		mapInstance.current = L.map(mapRef.current).setView([60, 90], 3)

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '© OpenStreetMap contributors'
		}).addTo(mapInstance.current)

		// Обработчик клика по карте
		mapInstance.current.on('click', e => {
			onMapClick(e.latlng.lat, e.latlng.lng)
		})

		// Очистка при размонтировании
		return () => {
			mapInstance.current?.remove()
		}
	}, [onMapClick])

	useEffect(() => {
		if (!mapInstance.current || !markerPosition) return

		// Удаление предыдущего маркера
		if (markerRef.current) {
			mapInstance.current.removeLayer(markerRef.current)
		}

		// Создание нового маркера
		const customIcon = L.divIcon({
			html: '<div style="background:var(--sage-dark,#6b8f52);width:16px;height:16px;border-radius:50%;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,.3)"></div>',
			iconSize: [16, 16],
			className: ''
		})

		markerRef.current = L.marker(markerPosition, { icon: customIcon }).addTo(mapInstance.current)
	}, [markerPosition])

	return <div ref={mapRef} style={{ height: '380px', width: '100%', borderRadius: 'var(--radius)' }} />
}
