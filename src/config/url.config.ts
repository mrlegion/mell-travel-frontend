export const APP_URL = process.env.APP_URL as string

export const PUBLIC_URL = {
	root: (url = '') => `${url ? url : ''}`,

	home: () => PUBLIC_URL.root('/'),
	auth: (url = '') => PUBLIC_URL.root(`/auth${url}`),
	feed: (option = '') => PUBLIC_URL.root(`/feed${option}`),
	track: (id = '') => PUBLIC_URL.root(`/track/${id}`),
	filtered: () => PUBLIC_URL.root('/track/filtered'),
	createTrack: () => PUBLIC_URL.root('/track/create'),
	mapExplorer: () => PUBLIC_URL.root('/map-explorer'),
	about: () => PUBLIC_URL.root('/about'),
	rules: () => PUBLIC_URL.root('/rules'),
	contacts: () => PUBLIC_URL.root('/contacts'),
	profile: () => PUBLIC_URL.root(`/profile`),
	user: (id = '') => PUBLIC_URL.root(`/profile/${id}`)
}

export const PROFILE_URL = {
	root: (url = '') => `${url ? url : ''}`,

	home: () => PROFILE_URL.root('/profile')
}
