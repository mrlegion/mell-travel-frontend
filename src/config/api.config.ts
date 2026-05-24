export const SERVER_URL = process.env.SERVER_URL as string

export const API_URL = {
	root: (url = '') => `${url ? url : ''}`,
	auth: (url = '') => API_URL.root(`/auth${url}`),
	comments: (url = '') => API_URL.root(`/comments${url}`),
	tracks: (url = '') => API_URL.root(`/track${url}`),
	profile: (url = '') => API_URL.root(`/profile${url}`),
	favorite: (url = '') => API_URL.root(`/favorite${url}`),
	like: (url = '') => API_URL.root(`/like${url}`),
	files: () => API_URL.root('/file')
}
