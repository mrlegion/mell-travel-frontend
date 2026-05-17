import { PUBLIC_URL } from '@/config/url.config'

export const menu = [
	{
		title: 'Навигация',
		items: [
			{
				title: 'Главная',
				link: PUBLIC_URL.home()
			},
			{
				title: 'Лента',
				link: PUBLIC_URL.feed()
			},
			{
				title: 'Карта',
				link: PUBLIC_URL.mapExplorer()
			},
			{
				title: 'Публикация',
				link: PUBLIC_URL.createTrack()
			}
		],
		className: 'offset-md-1'
	},
	{
		title: 'Проект',
		items: [
			{
				title: 'О проекте',
				link: PUBLIC_URL.about()
			},
			{
				title: 'Правила',
				link: PUBLIC_URL.rules()
			},
			{
				title: 'Поддержка',
				link: PUBLIC_URL.contacts()
			},
			{
				title: 'Кабинет',
				link: PUBLIC_URL.profile()
			}
		],
		className: ''
	},
	{
		title: 'Регионы',
		items: [
			{
				title: 'Алтай',
				link: PUBLIC_URL.feed('?region=Алтай')
			},
			{
				title: 'Байкал',
				link: PUBLIC_URL.feed('?region=Байкал')
			},
			{
				title: 'Камчатка',
				link: PUBLIC_URL.feed('?region=Камчатка')
			},
			{
				title: 'Карелия',
				link: PUBLIC_URL.feed('?region=Карелия')
			}
		],
		className: ''
	}
]
