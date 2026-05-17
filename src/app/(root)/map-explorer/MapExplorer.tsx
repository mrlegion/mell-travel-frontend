'use client'

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useRef } from 'react'

import { useGetAllTrack } from '@/hooks/queries/tracks/useGetAllTrack'

export default function MapExplorer() {
	const { tracks, isLoading } = useGetAllTrack()

	const mapRef = useRef<L.Map | null>(null)
	const mapContainerRef = useRef<HTMLDivElement>(null)
	const sidebarListRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!mapContainerRef.current || isLoading || !tracks) return

		// Инициализация карты
		const initializeMap = () => {
			if (mapContainerRef.current) {
				// Устанавливаем высоту контейнера
				if (mapContainerRef.current.clientHeight === 0) {
					mapContainerRef.current.style.height = '100%'
				}

				// Создаем карту
				const map = L.map(mapContainerRef.current).setView([62, 95], 4)
				mapRef.current = map

				// Добавляем тайлы
				L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution: '© OpenStreetMap contributors',
					maxZoom: 18
				}).addTo(map)

				// Создаем иконку
				const greenIcon = L.divIcon({
					html: `<div style="background:#6b8f52;width:14px;height:14px;border-radius:50%;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,.3)"></div>`,
					iconSize: [14, 14],
					className: ''
				})

				// Добавляем маркеры
				tracks.forEach(track => {
					if (track.lat && track.lng) {
						const marker = L.marker([track.lat, track.lng], { icon: greenIcon }).addTo(map)
						marker.bindPopup(`
              <div style="font-family:'Geologica',sans-serif;min-width:200px">
                <img alt="${track.title}" src="${track.images[0] || '/placeholder-image.jpg'}" style="width:100%;height:100px;object-fit:cover;border-radius:8px;margin-bottom:.5rem" onerror="this.src='/placeholder-image.jpg'">
                <div style="font-size:.8rem;color:#6b8f52;font-weight:600;text-transform:uppercase">${track.region}</div>
                <div style="font-weight:700;margin:.2rem 0 .5rem;font-size:.95rem">${track.title}</div>
                <a href="/track/${track.id}" style="color:#6b8f52;font-weight:600;font-size:.85rem">Читать отчёт →</a>
              </div>
            `)
					}
				})

				// Заполняем список в сайдбаре
				if (sidebarListRef.current) {
					sidebarListRef.current.innerHTML = tracks
						.map(
							track => `
            <div id="sidebar-${track.id}" style="padding:.75rem;border-radius:8px;cursor:pointer;transition:all .2s;border:1px solid transparent;margin-bottom:.5rem" 
                 onclick="window.location.href='/track/${track.id}'">
              <div style="font-size:.75rem;color:#6b8f52;font-weight:600;text-transform:uppercase">${track.region}</div>
              <div style="font-weight:600;font-size:.88rem;margin:.2rem 0">${track.title}</div>
              <div style="font-size:.78rem;color:#888">♥ ${track.likes || 0} · ${track.tags[0] || ''}</div>
            </div>
          `
						)
						.join('')
				}

				// Обновляем размер карты
				setTimeout(() => {
					map.invalidateSize()
				}, 100)
			}
		}

		initializeMap()

		// Очистка при размонтировании
		return () => {
			if (mapRef.current) {
				mapRef.current.remove()
				mapRef.current = null
			}
		}
	}, [tracks, isLoading])

	if (isLoading) {
		return <div className='map-explorer-loading'>Загрузка карты...</div>
	}

	return (
		<div className='map-explorer-wrap'>
			<div ref={mapContainerRef} id='mapExplorer' />

			<div className='map-sidebar'>
				<div className='map-sidebar-header'>
					<div
						style={{
							fontFamily: "'Playfair Display',serif",
							fontSize: '1.05rem',
							fontWeight: 700,
							marginBottom: '.25rem'
						}}
					>
						<i className='fa-solid fa-map-location-dot me-2' style={{ color: 'var(--sage-dark)' }}></i>
						Маршруты на карте
					</div>
					<div style={{ fontSize: '.78rem', color: 'var(--gray-mid)' }}>
						Нажмите на маркер, чтобы открыть отчёт
					</div>
				</div>
				<div ref={sidebarListRef} id='mapSidebarList' />
			</div>

			<div className='map-legend'>
				<div style={{ fontWeight: 700, marginBottom: '.5rem', color: 'var(--charcoal)' }}>Обозначения</div>
				<div className='d-flex align-items-center gap-2 mb-1'>
					<div
						style={{
							width: '12px',
							height: '12px',
							borderRadius: '50%',
							background: 'var(--sage-dark)',
							border: '2px solid white',
							boxShadow: '0 1px 4px rgba(0,0,0,.3)'
						}}
					></div>
					<span style={{ color: 'var(--gray-dark)' }}>Маршрут</span>
				</div>
				<div className='mt-2' style={{ color: 'var(--gray-mid)', fontSize: '.75rem' }}>
					Кликните по маркеру для деталей
				</div>
			</div>
		</div>
	)
}
