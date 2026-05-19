interface TabsHeaderProps {
	activeTab: 'my' | 'favorites' | 'settings'
	onClick: (name: 'my' | 'favorites' | 'settings') => void
	withoutSettings?: boolean
}

export function TabsHeader({ onClick, activeTab, withoutSettings = false }: TabsHeaderProps) {
	const getTabClassName = (tabName: 'my' | 'favorites' | 'settings') => {
		return `profile-tab ${activeTab === tabName ? 'active' : ''}`
	}

	return (
		<div className='profile-tabs'>
			<span className={getTabClassName('my')} data-tab='pane-posts' onClick={() => onClick('my')}>
				Мои публикации
			</span>
			<span
				className={getTabClassName('favorites')}
				data-tab='pane-favorites'
				onClick={() => onClick('favorites')}
			>
				Избранное
			</span>
			{withoutSettings ? (
				''
			) : (
				<span
					className={getTabClassName('settings')}
					data-tab='pane-settings'
					onClick={() => onClick('settings')}
				>
					Настройки
				</span>
			)}
		</div>
	)
}
