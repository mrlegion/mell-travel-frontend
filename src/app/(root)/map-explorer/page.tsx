'use client'

import dynamic from 'next/dynamic'
import Head from 'next/head'

// Динамически импортируем компонент без SSR
const MapExplorer = dynamic(() => import('@/app/(root)/map-explorer/MapExplorer'), {
	ssr: false,
	loading: () => <div className='map-explorer-loading'>Загрузка карты...</div>
})

export default function MapExplorerPage() {
	return (
		<>
			<Head>
				<link rel='stylesheet' href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css' />
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
				/>
			</Head>

			<div className='map-explorer-page'>
				<MapExplorer />
			</div>

			<style jsx global>{`
				.map-explorer-wrap {
					height: calc(100vh - 70px);
					position: relative;
					width: 100%;
				}

				#mapExplorer {
					width: 100%;
					height: 100%;
					min-height: 500px;
				}

				.map-sidebar {
					position: absolute;
					top: 1rem;
					left: 1rem;
					width: 290px;
					background: white;
					border-radius: 16px;
					box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
					padding: 0;
					z-index: 999;
					max-height: calc(100% - 2rem);
					overflow: hidden;
					display: flex;
					flex-direction: column;
				}

				.map-sidebar-header {
					padding: 1.25rem;
					border-bottom: 1px solid var(--gray-pale);
					flex-shrink: 0;
				}

				#mapSidebarList {
					overflow-y: auto;
					flex: 1;
					padding: 0.75rem;
				}

				.map-legend {
					position: absolute;
					bottom: 2rem;
					right: 1rem;
					background: white;
					border-radius: 12px;
					padding: 1rem 1.25rem;
					z-index: 999;
					box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
					font-size: 0.82rem;
				}

				@media (max-width: 768px) {
					.map-sidebar {
						width: calc(100% - 2rem);
						bottom: 0;
						top: auto;
					}
				}
			`}</style>
		</>
	)
}
