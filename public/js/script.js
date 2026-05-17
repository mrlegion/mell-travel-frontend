// ===========================
// MellTravel — script.js (ФИНАЛ, БЕЗ POST-5)
// ===========================

// ---- INITIAL DATA (без post-5) ----

const SAMPLE_POSTS = [
	{
		id: 'post-1',
		title: 'Алтай: три недели в горах без связи',
		region: 'Алтай',
		tags: ['горы', 'трекинг', 'дикая природа'],
		text: 'Мы отправились на Алтай в середине августа, когда жара в городах становится невыносимой, а горы зовут прохладой и тишиной. Маршрут проходил через перевал Кату-Ярык — один из самых живописных и суровых перевалов Сибири. Горная тропа Долины Чулышмана открывается постепенно, каждый поворот дарит новую панораму. Мы прошли более 180 км за 20 дней, ночуя в палатках на берегах горных рек. Это был опыт, который изменил меня навсегда.',
		excerpt:
			'Маршрут через перевал Кату-Ярык и Долину Чулышмана — 180 км пешком без связи. Опыт, который меняет взгляд на жизнь.',
		images: [
			'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
			'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800'
		],
		author: 'Мария Соколова',
		authorAvatar: 'https://i.pravatar.cc/150?img=47',
		date: '2025-08-14',
		likes: 142,
		comments: [],
		lat: 51.5,
		lng: 87.6,
		duration: '20 дней',
		difficulty: 'Сложный',
		bio: 'Прошла более 3 000 км пешком по России. Специализируюсь на трекинге в горах и водных маршрутах. Верю, что самые красивые места — без асфальта.'
	},
	{
		id: 'post-2',
		title: 'Байкал в марте: лёд, торосы и тишина',
		region: 'Байкал',
		tags: ['зима', 'лёд', 'природа'],
		text: 'Зимний Байкал — это другая планета. Лёд толщиной более метра поглощает звук, создавая абсолютную тишину. Мы путешествовали на велосипедах по льду от Листвянки до Ольхона — около 250 км за 7 дней. Ночевали в сёлах у местных жителей. Торосы — трещины во льду — создают сюрреалистичные скульптуры, которые невозможно описать словами. Только увидеть.',
		excerpt:
			'Зимний веломаршрут по льду Байкала — 250 км от Листвянки до Ольхона. Торосы, тишина и звёздное небо над самым глубоким озером планеты.',
		images: [
			'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200',
			'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=800',
			'https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=800'
		],
		author: 'Дмитрий Храмов',
		authorAvatar: 'https://i.pravatar.cc/150?img=12',
		date: '2025-03-20',
		likes: 218,
		comments: [],
		lat: 53.2,
		lng: 107.3,
		duration: '7 дней',
		difficulty: 'Средний',
		bio: 'Вело-путешественник, проехал более 15 000 км по России. Обожаю зимние маршруты и съёмку дикой природы. Моя цель — показать, что путешествовать можно в любую погоду.'
	},
	{
		id: 'post-3',
		title: 'Камчатка: вулканы с близкого расстояния',
		region: 'Камчатка',
		tags: ['вулканы', 'экстрим', 'треккинг'],
		text: 'Восхождение на Авачинский вулкан — это боевое крещение для каждого туриста, приехавшего на Камчатку. Высота 2741 метр, серный запах, горячие фумаролы и вид на Авачинскую бухту, которая считается одной из красивейших в мире. Мы провели на полуострове 12 дней, посетив Долину Гейзеров, кальдеру Узон и медвежью рыбалку на реке Камбальной.',
		excerpt:
			'Восхождение на Авачинский вулкан, Долина Гейзеров и медвежья рыбалка. 12 дней на самом удалённом и удивительном полуострове России.',
		images: [
			'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1200',
			'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
			'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800'
		],
		author: 'Алексей Горин',
		authorAvatar: 'https://i.pravatar.cc/150?img=33',
		date: '2025-07-05',
		likes: 305,
		comments: [],
		lat: 53.2,
		lng: 159.0,
		duration: '12 дней',
		difficulty: 'Сложный',
		bio: 'Вулканолог-любитель, исследователь Камчатки и Курил. Организую небольшие экспедиции к действующим вулканам. В путешествиях ценю аутентичность и тишину.'
	},
	{
		id: 'post-4',
		title: 'Карелия: озёра, пороги и белые ночи',
		region: 'Карелия',
		tags: ['водный туризм', 'природа', 'каяк'],
		text: 'Сплав по рекам Карелии на байдарках — это мечта каждого любителя водного туризма. Мы прошли маршрут Суна–Воттовааре за 10 дней. Водопад Кивач, скалы Воттовааре, ночные зарницы в июне — всё это сложилось в незабываемую картину. В белые ночи не хочется спать совсем.',
		excerpt:
			'Байдарочный маршрут Суна–Воттовааре в Карелии. Водопад Кивач, скалы и удивительные белые ночи в 10 днях сплава.',
		images: [
			'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200',
			'https://images.unsplash.com/photo-1439405328861-02783ced8b87?w=800',
			'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800'
		],
		author: 'Ольга Петрова',
		authorAvatar: 'https://i.pravatar.cc/150?img=56',
		date: '2025-06-18',
		likes: 89,
		comments: [],
		lat: 62.9,
		lng: 33.1,
		duration: '10 дней',
		difficulty: 'Средний',
		bio: 'Инструктор по водному туризму. Провожу сплавы по рекам Карелии и Кольского полуострова. Учу новичков чувствовать воду и управлять байдаркой.'
	},
	{
		id: 'post-6',
		title: 'Хибины: полярный день и горная тундра',
		region: 'Мурманская область',
		tags: ['горы', 'арктика', 'треккинг'],
		text: 'Хибинский горный массив в Мурманской области — малоизвестный, но потрясающий уголок России. В июле здесь полярный день: солнце не заходит сутками. Мы прошли кольцевой маршрут вокруг горного массива за 8 дней. Горная тундра, перевалы, карликовые берёзы и тишина, нарушаемая лишь ветром.',
		excerpt:
			'Кольцевой маршрут по Хибинам в условиях полярного дня. Горная арктическая тундра в 8 днях пешего путешествия.',
		images: [
			'https://images.unsplash.com/photo-1517825738774-7de9363ef735?w=1200',
			'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800',
			'https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=800'
		],
		author: 'Наталья Ким',
		authorAvatar: 'https://i.pravatar.cc/150?img=39',
		date: '2025-07-22',
		likes: 64,
		comments: [],
		lat: 67.6,
		lng: 33.7,
		duration: '8 дней',
		difficulty: 'Средний',
		bio: 'Полярный гид, специалист по выживанию в арктических условиях. Провожу треки в Хибинах и на Кольском. Учу видеть красоту в суровой природе Севера.'
	},
	{
		id: 'post-7',
		title: 'Алтай: Чуйский тракт и долина реки Чуя',
		region: 'Алтай',
		tags: ['горы', 'автотуризм', 'природа'],
		text: 'Чуйский тракт — одно из самых живописных шоссе в мире. Мы проехали от Бийска до границы с Монголией, останавливаясь в самых красивых местах: перевал Чике-Таман, петроглифы Калбак-Таш, Марс-1 и Марс-2. Ночёвки в палатках прямо у реки Чуи. Дорога отличная, но нужно быть готовым к резкой смене высот. Особенно впечатлили разноцветные горы в районе Кош-Агача — похоже на марсианский пейзаж.',
		excerpt:
			'Путешествие по Чуйскому тракту от Бийска до границы с Монголией. Марсианские пейзажи, петроглифы и палатки у реки.',
		images: [
			'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
			'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800'
		],
		author: 'Сергей Волков',
		authorAvatar: 'https://i.pravatar.cc/150?img=15',
		date: '2025-07-30',
		likes: 112,
		comments: [],
		lat: 50.2,
		lng: 86.5,
		duration: '10 дней',
		difficulty: 'Средний',
		bio: 'Автопутешественник, объездил весь Алтай и Саяны. Считаю, что лучший способ увидеть Россию — за рулём.'
	},
	{
		id: 'post-8',
		title: 'Байкал: Большая Байкальская тропа (Листвянка — Большие Коты)',
		region: 'Байкал',
		tags: ['трекинг', 'природа', 'озеро'],
		text: 'Один из самых доступных и красивых участков Большой Байкальской тропы. Мы прошли из Листвянки до посёлка Большие Коты за 2 дня с одной ночёвкой в палатке. Тропа идёт вдоль берега Байкала, открываются невероятные виды на озеро. В Больших Котах обязательно зайдите в музей Байкаловедения. Вода в озере даже в июле холодная, но купаться можно. Совет: берите с собой репеллент от клещей и дождевик — погода меняется быстро.',
		excerpt:
			'Поход по Большой Байкальской тропе от Листвянки до Больших Котов. 2 дня вдоль самого глубокого озера в мире.',
		images: [
			'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200',
			'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=800',
			'https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=800'
		],
		author: 'Елена Морозова',
		authorAvatar: 'https://i.pravatar.cc/150?img=45',
		date: '2025-07-15',
		likes: 98,
		comments: [],
		lat: 51.9,
		lng: 104.8,
		duration: '2 дня',
		difficulty: 'Лёгкий',
		bio: 'Эко-активистка, участница волонтёрских проектов по очистке Байкала. Люблю пешие походы и бережное отношение к природе.'
	},
	{
		id: 'post-9',
		title: 'Камчатка: Восхождение на Мутновский вулкан',
		region: 'Камчатка',
		tags: ['вулканы', 'экстрим', 'треккинг'],
		text: 'Мутновский вулкан — один из самых активных и доступных на Камчатке. Высота 2322 метра. Восхождение занимает 5-6 часов. Главная фишка — активные фумаролы, грязевые котлы и пар из трещин прямо под ногами. Нужна хорошая физическая подготовка и тёплая непродуваемая одежда. Мы поднимались с гидом, но тропа хорошо обозначена. Вид на кратер и окрестные вулканы неописуемый. Обязательно берите с собой термос с горячим чаем!',
		excerpt:
			'Активный вулкан Мутновский: восхождение к кратеру с фумаролами и паровыми полями. 5-6 часов незабываемых впечатлений.',
		images: [
			'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1200',
			'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
			'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800'
		],
		author: 'Павел Новиков',
		authorAvatar: 'https://i.pravatar.cc/150?img=28',
		date: '2025-08-20',
		likes: 156,
		comments: [],
		lat: 52.45,
		lng: 158.2,
		duration: '1 день',
		difficulty: 'Сложный',
		bio: 'Альпинист, вулканолог. Покорил все действующие вулканы Камчатки. Пишу статьи о безопасности в горах.'
	},
	{
		id: 'post-10',
		title: 'Карелия: Рафтинг на реке Шуя',
		region: 'Карелия',
		tags: ['водный туризм', 'экстрим', 'рафтинг'],
		text: 'Река Шуя — одна из лучших в Карелии для спортивного рафтинга. Пороги 2-3 категории сложности: «Гать», «Мост», «Труба». Мы прошли 60 км за 3 дня на катамаранах. Ночёвки на живописных берегах, рыбалка на щуку и окуня, купание в кристально чистых озёрах по пути. Требуется опыт водного туризма, но можно и с инструктором. В июне — белые ночи, спать почти не хочется!',
		excerpt:
			'Сплав по реке Шуя на катамаранах. Пороги, ночёвки на берегу и белые ночи карельского лета.',
		images: [
			'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200',
			'https://images.unsplash.com/photo-1439405328861-02783ced8b87?w=800',
			'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800'
		],
		author: 'Анна Власова',
		authorAvatar: 'https://i.pravatar.cc/150?img=62',
		date: '2025-07-10',
		likes: 87,
		comments: [],
		lat: 62.0,
		lng: 34.5,
		duration: '3 дня',
		difficulty: 'Средний',
		bio: 'Мастер спорта по водному туризму. Организую сплавы для команд и корпоративов. Учу работать в команде на воде.'
	},
	{
		id: 'post-11',
		title: 'Алтай: Поход к Телецкому озеру',
		region: 'Алтай',
		tags: ['горы', 'озеро', 'трекинг'],
		text: 'Телецкое озеро — жемчужина Алтая. Мы прошли пешком от Артыбаша до водопада Корбу, а затем поднялись на смотровую площадку на хребте Торот. Вода в озере бирюзового цвета, видимость до 15 метров. Лучшее время — июль-август. Маршрут подходит для новичков: тропа хорошо оборудована, есть места для ночлега с палатками. Обязательно возьмите купальник — вода прогревается до +18!',
		excerpt:
			'Пеший поход к Телецкому озеру с восхождением на смотровую площадку. Идеальный маршрут для знакомства с Алтаем.',
		images: [
			'https://images.unsplash.com/photo-1434394673728-c2b2cfd6d8d9?w=1200',
			'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800',
			'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800'
		],
		author: 'Михаил Зайцев',
		authorAvatar: 'https://i.pravatar.cc/150?img=52',
		date: '2025-08-25',
		likes: 104,
		comments: [],
		lat: 51.8,
		lng: 87.3,
		duration: '4 дня',
		difficulty: 'Лёгкий',
		bio: 'Горный гид, знаю Алтай от и до. Помогаю туристам выбирать безопасные маршруты и получать максимум удовольствия.'
	}
]

// ---- ПРИНУДИТЕЛЬНОЕ УДАЛЕНИЕ post-5 ИЗ ХРАНИЛИЩА ----
function migrateRemovePost5() {
	const stored = localStorage.getItem('melltravel_posts')
	if (stored) {
		let posts = JSON.parse(stored)
		const filtered = posts.filter(p => p.id !== 'post-5')
		if (filtered.length !== posts.length) {
			localStorage.setItem('melltravel_posts', JSON.stringify(filtered))
			console.log('Post-5 removed from localStorage')
		}
	}
}
migrateRemovePost5()
// ----------------------------------------------------

// ---- ПОЛЬЗОВАТЕЛИ И АВТОРИЗАЦИЯ ----

const MARIA_USER = {
	id: 'user-maria',
	name: 'Мария Соколова',
	email: 'maria@example.com',
	avatar: 'https://i.pravatar.cc/150?img=47',
	bio: 'Прошла более 3 000 км пешком по России. Специализируюсь на трекинге в горах и водных маршрутах. Верю, что самые красивые места — без асфальта.'
}

function getCurrentUser() {
	const stored = localStorage.getItem('melltravel_current_user')
	if (!stored) return null
	return JSON.parse(stored)
}

function setCurrentUser(user) {
	if (user) {
		localStorage.setItem('melltravel_current_user', JSON.stringify(user))
	} else {
		localStorage.removeItem('melltravel_current_user')
	}
}

function loginUser(email, password) {
	setCurrentUser(MARIA_USER)
	return MARIA_USER
}

function registerUser(name, email, password) {
	setCurrentUser(MARIA_USER)
	return { success: true, user: MARIA_USER }
}

function logoutUser() {
	setCurrentUser(null)
	showToast('Вы вышли из аккаунта')
	setTimeout(() => window.location.reload(), 1000)
}

function requireAuth(actionName) {
	const user = getCurrentUser()
	if (!user) {
		showToast(`Для ${actionName} необходимо войти в аккаунт!`, 'error')
		return false
	}
	return true
}

// ---- РАБОТА С ПОСТАМИ ----

function getPosts() {
	const stored = localStorage.getItem('melltravel_posts')
	if (!stored) {
		localStorage.setItem('melltravel_posts', JSON.stringify(SAMPLE_POSTS))
		return SAMPLE_POSTS
	}
	return JSON.parse(stored)
}

function savePosts(posts) {
	localStorage.setItem('melltravel_posts', JSON.stringify(posts))
}

function getPostById(id) {
	return getPosts().find(p => p.id === id)
}

function getPostsByAuthor(authorName) {
	return getPosts().filter(p => p.author === authorName)
}

function getLikes() {
	return JSON.parse(localStorage.getItem('melltravel_likes') || '[]')
}

function saveLikes(likes) {
	localStorage.setItem('melltravel_likes', JSON.stringify(likes))
}

function isLiked(postId) {
	const user = getCurrentUser()
	if (!user) return false
	const likes = getLikes()
	return likes.includes(`${user.id}_${postId}`)
}

function toggleLike(postId) {
	if (!requireAuth('лайка')) return false
	const user = getCurrentUser()
	const likes = getLikes()
	const key = `${user.id}_${postId}`
	const posts = getPosts()
	const post = posts.find(p => p.id === postId)
	if (!post) return false

	if (likes.includes(key)) {
		const idx = likes.indexOf(key)
		likes.splice(idx, 1)
		post.likes = Math.max(0, post.likes - 1)
	} else {
		likes.push(key)
		post.likes += 1
	}
	saveLikes(likes)
	savePosts(posts)
	return post.likes
}

function getFavorites() {
	const user = getCurrentUser()
	if (!user) return []
	const stored = localStorage.getItem(`melltravel_favorites_${user.id}`)
	return stored ? JSON.parse(stored) : []
}

function saveFavorites(favs) {
	const user = getCurrentUser()
	if (user)
		localStorage.setItem(
			`melltravel_favorites_${user.id}`,
			JSON.stringify(favs)
		)
}

function isFavorite(postId) {
	return getFavorites().includes(postId)
}

function toggleFavorite(postId) {
	if (!requireAuth('добавления в избранное')) return false
	const favs = getFavorites()
	if (favs.includes(postId)) {
		favs.splice(favs.indexOf(postId), 1)
	} else {
		favs.push(postId)
	}
	saveFavorites(favs)
	return favs.includes(postId)
}

function addComment(postId, text, author) {
	if (!requireAuth('комментария')) return null
	const posts = getPosts()
	const post = posts.find(p => p.id === postId)
	if (!post) return null
	const comment = {
		id: 'c-' + Date.now(),
		author: author || getCurrentUser().name,
		text: text,
		date: new Date().toLocaleDateString('ru-RU')
	}
	if (!post.comments) post.comments = []
	post.comments.push(comment)
	savePosts(posts)
	return comment
}

function saveNewPost(postData) {
	if (!requireAuth('публикации')) return null
	const currentUser = getCurrentUser()
	const posts = getPosts()
	const newPost = {
		id: 'post-' + Date.now(),
		...postData,
		likes: 0,
		comments: [],
		date: new Date().toISOString().split('T')[0],
		author: currentUser.name,
		authorAvatar: currentUser.avatar,
		bio: currentUser.bio
	}
	posts.unshift(newPost)
	savePosts(posts)
	return newPost
}

// ---- СТАТИСТИКА ----

function getTotalPostsCount() {
	return getPosts().length
}

function getDistinctRegionsCount() {
	const posts = getPosts()
	const regions = new Set(posts.map(p => p.region))
	return regions.size
}

function getRegionPostCount(region) {
	return getPosts().filter(p => p.region === region).length
}

// ---- TOAST ----

function showToast(message, type = 'success') {
	let toast = document.getElementById('toastMell')
	if (!toast) {
		toast = document.createElement('div')
		toast.id = 'toastMell'
		toast.className = 'toast-mell'
		document.body.appendChild(toast)
	}
	toast.innerHTML = `<i class="fa-solid fa-${type === 'success' ? 'circle-check' : 'circle-xmark'}"></i> ${message}`
	toast.className = `toast-mell ${type} show`
	clearTimeout(window._toastTimer)
	window._toastTimer = setTimeout(() => {
		toast.classList.remove('show')
	}, 3000)
}

// ---- NAVBAR И UI АВТОРИЗАЦИИ ----

function initNavbarScroll() {
	const navbar = document.querySelector('.navbar')
	if (!navbar) return
	window.addEventListener('scroll', () => {
		if (window.scrollY > 50) {
			navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)'
		} else {
			navbar.style.boxShadow = 'none'
		}
	})
}

function initAuthUI() {
	const user = getCurrentUser()
	const authButtonsContainer = document.querySelector('.auth-buttons')
	const publishBtn = document.querySelector('.btn-nav-primary')

	if (!authButtonsContainer) return

	if (user) {
		authButtonsContainer.innerHTML = `
      <span class="user-name small me-2" style="color:var(--charcoal);">${user.name}</span>
      <a href="profile.html" class="nav-link"><i class="fa-regular fa-user"></i></a>
      <button class="btn-nav-primary logout-btn" style="background:var(--gray-mid);"><i class="fa-solid fa-sign-out-alt"></i> Выйти</button>
    `
		document
			.querySelector('.logout-btn')
			?.addEventListener('click', () => logoutUser())
	} else {
		authButtonsContainer.innerHTML = `
      <button class="btn-nav-primary login-btn me-2" data-bs-toggle="modal" data-bs-target="#loginModal"><i class="fa-solid fa-sign-in-alt"></i> Войти</button>
      <button class="btn-nav-primary register-btn" data-bs-toggle="modal" data-bs-target="#registerModal"><i class="fa-solid fa-user-plus"></i> Регистрация</button>
    `
	}

	if (publishBtn) {
		const newPublishBtn = publishBtn.cloneNode(true)
		publishBtn.parentNode.replaceChild(newPublishBtn, publishBtn)
		newPublishBtn.addEventListener('click', e => {
			if (!getCurrentUser()) {
				e.preventDefault()
				showToast(
					'Для добавления новой публикации необходимо авторизоваться!',
					'error'
				)
			}
		})
	}
}

function initAuthModals() {
	const loginForm = document.getElementById('loginForm')
	if (loginForm) {
		loginForm.addEventListener('submit', e => {
			e.preventDefault()
			const email = document.getElementById('loginEmail').value
			const password = document.getElementById('loginPassword').value
			const user = loginUser(email, password)
			if (user) {
				showToast(`Добро пожаловать, ${user.name}!`)
				const modal = bootstrap.Modal.getInstance(
					document.getElementById('loginModal')
				)
				modal.hide()
				setTimeout(() => window.location.reload(), 500)
			} else {
				showToast('Ошибка входа', 'error')
			}
		})
	}

	const registerForm = document.getElementById('registerForm')
	if (registerForm) {
		registerForm.addEventListener('submit', e => {
			e.preventDefault()
			const name = document.getElementById('regName').value
			const email = document.getElementById('regEmail').value
			const password = document.getElementById('regPassword').value
			const result = registerUser(name, email, password)
			if (result.success) {
				showToast(`Регистрация успешна! Добро пожаловать, ${name}!`)
				const modal = bootstrap.Modal.getInstance(
					document.getElementById('registerModal')
				)
				modal.hide()
				setTimeout(() => window.location.reload(), 500)
			} else {
				showToast(result.error, 'error')
			}
		})
	}
}

// ---- СТРАНИЦЫ ----

function initIndexPage() {
	renderFeaturedPosts()
	updateIndexStats()
	updateRegionStatsOnIndex()

	const searchForm = document.getElementById('heroSearchForm')
	if (searchForm) {
		searchForm.addEventListener('submit', e => {
			e.preventDefault()
			const query = document.getElementById('heroSearchInput').value
			const region = document.getElementById('heroRegionSelect').value
			const params = new URLSearchParams()
			if (query) params.set('q', query)
			if (region) params.set('region', region)
			window.location.href = `feed.html?${params.toString()}`
		})
	}
}

function updateIndexStats() {
	const totalPosts = getTotalPostsCount()
	const totalRegions = getDistinctRegionsCount()

	const routesStat = document.querySelector('.hero-stat .num')
	if (
		routesStat &&
		routesStat.parentElement?.querySelector('.label')?.textContent ===
			'Маршрутов'
	) {
		routesStat.textContent = totalPosts + '+'
	}
	const regionsStat = document.querySelectorAll('.hero-stat .num')[2]
	if (regionsStat) regionsStat.textContent = totalRegions

	const statNumbers = document.querySelectorAll('.stat-num')
	if (statNumbers[0]) statNumbers[0].textContent = '84%'
	if (statNumbers[1]) statNumbers[1].textContent = '+47%'
	if (statNumbers[2]) statNumbers[2].textContent = '93%'
	const statDesc = document.querySelectorAll('.stat-desc')
	if (statDesc[2])
		statDesc[2].textContent = 'пользователей рекомендуют MellTravel друзьям'
}

function updateRegionStatsOnIndex() {
	const regions = ['Алтай', 'Байкал', 'Камчатка', 'Карелия']
	const regionSpans = document.querySelectorAll('.region-count')
	regionSpans.forEach((span, idx) => {
		if (idx < regions.length) {
			const count = getRegionPostCount(regions[idx])
			span.textContent = count
		}
	})
}

function renderFeaturedPosts() {
	const container = document.getElementById('featuredPosts')
	if (!container) return
	const posts = getPosts().slice(0, 3)
	container.innerHTML = posts.map(post => createPostCard(post)).join('')
	attachCardEvents()
}

function initFeedPage() {
	const urlParams = new URLSearchParams(window.location.search)
	const q = urlParams.get('q') || ''
	const region = urlParams.get('region') || ''

	if (q) {
		const si = document.getElementById('searchInput')
		if (si) si.value = q
	}
	if (region) {
		const rs = document.getElementById('regionFilter')
		if (rs) rs.value = region
	}

	renderFeed()

	document.querySelectorAll('.filter-tag-btn').forEach(btn => {
		btn.addEventListener('click', () => {
			document
				.querySelectorAll('.filter-tag-btn')
				.forEach(b => b.classList.remove('active'))
			btn.classList.add('active')
			renderFeed()
		})
	})

	const regionFilter = document.getElementById('regionFilter')
	if (regionFilter) regionFilter.addEventListener('change', renderFeed)

	const sortSelect = document.getElementById('sortSelect')
	if (sortSelect) sortSelect.addEventListener('change', renderFeed)

	const searchInput = document.getElementById('searchInput')
	if (searchInput) {
		searchInput.addEventListener('input', debounce(renderFeed, 300))
	}
}

function renderFeed() {
	const container = document.getElementById('feedGrid')
	const countEl = document.getElementById('postCount')
	if (!container) return

	let posts = getPosts()

	const activeTag = document.querySelector('.filter-tag-btn.active')?.dataset
		.tag
	const region = document.getElementById('regionFilter')?.value
	const sort = document.getElementById('sortSelect')?.value
	const q = document.getElementById('searchInput')?.value?.toLowerCase()

	if (activeTag && activeTag !== 'all') {
		posts = posts.filter(p => p.tags.includes(activeTag))
	}
	if (region) {
		posts = posts.filter(p => p.region === region)
	}
	if (q) {
		posts = posts.filter(
			p =>
				p.title.toLowerCase().includes(q) ||
				p.region.toLowerCase().includes(q) ||
				p.text.toLowerCase().includes(q)
		)
	}
	if (sort === 'likes') {
		posts.sort((a, b) => b.likes - a.likes)
	} else if (sort === 'date') {
		posts.sort((a, b) => new Date(b.date) - new Date(a.date))
	}

	if (posts.length === 0) {
		container.innerHTML = `<div class="col-12 text-center py-5">
      <i class="fa-solid fa-map-pin fa-3x mb-3" style="color:var(--gray-light)"></i>
      <p class="text-muted-mell">По вашему запросу ничего не найдено</p>
    </div>`
	} else {
		container.innerHTML = posts.map(post => createPostCard(post)).join('')
		attachCardEvents()
	}

	if (countEl) countEl.textContent = posts.length
}

function initPostPage() {
	const urlParams = new URLSearchParams(window.location.search)
	const postId = urlParams.get('id')
	const post = getPostById(postId)

	if (!post) {
		document.getElementById('postContent').innerHTML =
			'<div class="container py-5 text-center"><h3>Публикация не найдена</h3><a href="feed.html" class="btn-primary-green mt-3">К ленте</a></div>'
		return
	}

	document.getElementById('postHeroImg').src =
		post.images[0] ||
		'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200'
	document.getElementById('postRegion').textContent = post.region
	document.getElementById('postTitle').textContent = post.title
	document.getElementById('postDate').textContent = formatDate(post.date)
	document.getElementById('postAuthorHero').textContent = post.author
	document.getElementById('postAuthorHero').style.cursor = 'pointer'
	document.getElementById('postAuthorHero').addEventListener('click', () => {
		window.location.href = `profile.html?user=${encodeURIComponent(post.author)}`
	})

	document.getElementById('postBody').textContent = post.text
	document.getElementById('postDuration').textContent = post.duration || '—'
	document.getElementById('postDifficulty').textContent =
		post.difficulty || '—'

	const tagsEl = document.getElementById('postTags')
	if (tagsEl)
		tagsEl.innerHTML = post.tags
			.map(t => `<span class="tag">${t}</span>`)
			.join('')

	renderGallery(post.images)

	const likeBtn = document.getElementById('postLikeBtn')
	const likeCount = document.getElementById('postLikeCount')
	if (likeBtn) {
		likeCount.textContent = post.likes
		if (isLiked(post.id)) likeBtn.classList.add('liked')
		likeBtn.addEventListener('click', () => {
			const newCount = toggleLike(post.id)
			if (newCount !== false) {
				likeCount.textContent = newCount
				likeBtn.classList.toggle('liked')
				showToast(
					isLiked(post.id)
						? 'Отмечено как понравившееся'
						: 'Отметка снята'
				)
			}
		})
	}

	const favBtn = document.getElementById('postFavBtn')
	if (favBtn) {
		if (isFavorite(post.id))
			favBtn.innerHTML =
				'<i class="fa-solid fa-bookmark"></i> В избранном'
		favBtn.addEventListener('click', () => {
			const added = toggleFavorite(post.id)
			if (added !== false) {
				favBtn.innerHTML = added
					? '<i class="fa-solid fa-bookmark"></i> В избранном'
					: '<i class="fa-regular fa-bookmark"></i> В избранное'
				showToast(
					added ? 'Добавлено в избранное' : 'Удалено из избранного'
				)
			}
		})
	}

	if (post.lat && post.lng) {
		initPostMap(post.lat, post.lng, post.title)
	}

	renderComments(post)

	const commentForm = document.getElementById('commentForm')
	if (commentForm) {
		commentForm.addEventListener('submit', e => {
			e.preventDefault()
			const text = document.getElementById('commentText').value.trim()
			const author =
				document.getElementById('commentAuthor').value.trim() ||
				getCurrentUser()?.name ||
				'Путешественник'
			if (!text) {
				showToast('Введите текст комментария', 'error')
				return
			}
			const comment = addComment(post.id, text, author)
			if (comment) {
				appendComment(comment)
				commentForm.reset()
				showToast('Комментарий добавлен')
			}
		})
	}
}

function renderGallery(images) {
	const gallery = document.getElementById('postGallery')
	if (!gallery || !images.length) return
	gallery.innerHTML = images
		.map(
			(src, i) =>
				`<img src="${src}" alt="Фото ${i + 1}" onclick="openLightbox('${src}')">`
		)
		.join('')
}

function renderComments(post) {
	const container = document.getElementById('commentsContainer')
	if (!container) return
	if (!post.comments || post.comments.length === 0) {
		container.innerHTML =
			'<p class="text-muted-mell text-center py-3 small">Пока нет комментариев. Будьте первым!</p>'
		return
	}
	container.innerHTML = post.comments.map(c => renderCommentHTML(c)).join('')
}

function appendComment(comment) {
	const container = document.getElementById('commentsContainer')
	if (!container) return
	const placeholder = container.querySelector('.text-muted-mell')
	if (placeholder) placeholder.remove()
	const div = document.createElement('div')
	div.innerHTML = renderCommentHTML(comment)
	container.appendChild(div.firstElementChild)
}

function renderCommentHTML(c) {
	return `<div class="comment-box">
    <div class="d-flex align-items-center gap-2 mb-2">
      <div style="width:36px;height:36px;border-radius:50%;background:var(--sage-pale);display:flex;align-items:center;justify-content:center;color:var(--sage-dark);font-weight:700;font-size:.9rem;">${c.author[0]}</div>
      <div>
        <div style="font-weight:600;font-size:.9rem;">${c.author}</div>
        <div class="text-muted-mell" style="font-size:.78rem;">${c.date}</div>
      </div>
    </div>
    <p style="font-size:.92rem;margin:0;">${c.text}</p>
  </div>`
}

function initPostMap(lat, lng, title) {
	const map = L.map('postRouteMap').setView([lat, lng], 10)
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '© OpenStreetMap contributors'
	}).addTo(map)

	const greenIcon = L.divIcon({
		html: '<div style="background:var(--sage-dark,#6b8f52);width:16px;height:16px;border-radius:50%;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,.3)"></div>',
		iconSize: [16, 16],
		className: ''
	})

	L.marker([lat, lng], { icon: greenIcon })
		.addTo(map)
		.bindPopup(`<strong>${title}</strong>`)
		.openPopup()
}

function initProfilePage() {
	const urlParams = new URLSearchParams(window.location.search)
	const userName = urlParams.get('user')
	const currentUser = getCurrentUser()
	let profileUser = null
	let userPosts = []

	if (userName) {
		const posts = getPosts()
		const authorPost = posts.find(p => p.author === userName)
		if (authorPost) {
			profileUser = {
				id: authorPost.author,
				name: authorPost.author,
				avatar: authorPost.authorAvatar,
				bio:
					authorPost.bio ||
					'Путешественник, который любит делиться опытом.'
			}
			userPosts = getPostsByAuthor(userName)
		}
	} else if (currentUser) {
		profileUser = currentUser
		userPosts = getPostsByAuthor(currentUser.name)
	}

	if (!profileUser) {
		document.querySelector('.profile-hero').innerHTML =
			'<div class="container text-center py-5"><h3>Пользователь не найден</h3><a href="index.html" class="btn-primary-green mt-3">На главную</a></div>'
		return
	}

	document.querySelector('.profile-hero h1').textContent = profileUser.name
	const avatarImg = document.querySelector('.avatar-circle')
	if (avatarImg) avatarImg.src = profileUser.avatar
	const bioText = document.querySelector('.bio-text')
	if (bioText) bioText.textContent = profileUser.bio || 'Путешественник.'

	const totalLikes = userPosts.reduce((sum, p) => sum + (p.likes || 0), 0)
	const statNumbers = document.querySelectorAll(
		'.profile-stat-card div:first-child'
	)
	if (statNumbers[0]) statNumbers[0].textContent = userPosts.length
	if (statNumbers[1]) statNumbers[1].textContent = totalLikes

	const subscribeBtnContainer = document.getElementById(
		'subscribeBtnContainer'
	)
	if (subscribeBtnContainer) subscribeBtnContainer.innerHTML = ''

	const container = document.getElementById('myPosts')
	if (container) {
		if (userPosts.length === 0) {
			container.innerHTML =
				'<div class="col-12"><p class="text-muted-mell">Публикаций пока нет</p></div>'
		} else {
			container.innerHTML = userPosts.map(p => createPostCard(p)).join('')
			attachCardEvents()
		}
	}

	const isOwnProfile = currentUser && currentUser.name === profileUser.name
	const addPostBtn = document.querySelector(
		'#pane-posts .d-flex .btn-primary-green'
	)
	const favoritesTab = document.querySelector(
		'.profile-tab[data-tab="pane-favorites"]'
	)
	const settingsTab = document.querySelector(
		'.profile-tab[data-tab="pane-settings"]'
	)

	if (addPostBtn)
		addPostBtn.style.display = isOwnProfile ? 'inline-flex' : 'none'
	if (favoritesTab)
		favoritesTab.style.display = isOwnProfile ? 'inline-block' : 'none'
	if (settingsTab)
		settingsTab.style.display = isOwnProfile ? 'inline-block' : 'none'

	const favContainer = document.getElementById('myFavorites')
	if (favContainer) {
		if (isOwnProfile) {
			const favIds = getFavorites()
			const favPosts = getPosts().filter(p => favIds.includes(p.id))
			if (favPosts.length === 0) {
				favContainer.innerHTML =
					'<div class="col-12"><p class="text-muted-mell">Избранное пусто</p></div>'
			} else {
				favContainer.innerHTML = favPosts
					.map(p => createPostCard(p))
					.join('')
				attachCardEvents()
			}
		} else {
			favContainer.innerHTML =
				'<div class="col-12"><p class="text-muted-mell">Избранное доступно только владельцу аккаунта</p></div>'
		}
	}

	document.querySelectorAll('.profile-tab').forEach(tab => {
		tab.addEventListener('click', () => {
			document
				.querySelectorAll('.profile-tab')
				.forEach(t => t.classList.remove('active'))
			tab.classList.add('active')
			const target = tab.dataset.tab
			document
				.querySelectorAll('.tab-pane')
				.forEach(p => (p.style.display = 'none'))
			const pane = document.getElementById(target)
			if (pane) pane.style.display = 'block'
		})
	})
}

function initAddPostPage() {
	if (!requireAuth('публикации')) {
		window.location.href = 'index.html'
		return
	}

	let currentStep = 1
	const totalSteps = 3
	let markerLat = null,
		markerLng = null
	let addPostMap = null,
		addPostMarker = null

	function updateSteps(step) {
		document.querySelectorAll('.step-dot').forEach((dot, i) => {
			dot.classList.remove('active', 'done')
			if (i + 1 < step) dot.classList.add('done')
			else if (i + 1 === step) dot.classList.add('active')
		})
		document.querySelectorAll('.step-line').forEach((line, i) => {
			line.classList.toggle('done', i + 1 < step)
		})
		document.querySelectorAll('.form-step').forEach((s, i) => {
			s.classList.toggle('active', i + 1 === step)
		})
	}

	function nextStep() {
		if (currentStep < totalSteps) {
			if (!validateStep(currentStep)) return
			currentStep++
			updateSteps(currentStep)
			if (currentStep === 3 && !addPostMap) {
				setTimeout(() => {
					addPostMap = L.map('addPostMap').setView([60, 90], 3)
					L.tileLayer(
						'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
						{
							attribution: '© OpenStreetMap contributors'
						}
					).addTo(addPostMap)
					addPostMap.on('click', e => {
						markerLat = e.latlng.lat
						markerLng = e.latlng.lng
						if (addPostMarker) addPostMap.removeLayer(addPostMarker)
						addPostMarker = L.marker([markerLat, markerLng]).addTo(
							addPostMap
						)
						document.getElementById('mapLatLng').textContent =
							`📍 ${markerLat.toFixed(4)}, ${markerLng.toFixed(4)}`
					})
				}, 100)
			}
		}
	}

	function prevStep() {
		if (currentStep > 1) {
			currentStep--
			updateSteps(currentStep)
		}
	}

	function validateStep(step) {
		let valid = true
		if (step === 1) {
			const title = document.getElementById('postTitleInput')
			const region = document.getElementById('postRegionInput')
			if (!title.value.trim()) {
				showFieldError('postTitleInput', 'titleError')
				valid = false
			} else clearFieldError('postTitleInput', 'titleError')
			if (!region.value) {
				showFieldError('postRegionInput', 'regionError')
				valid = false
			} else clearFieldError('postRegionInput', 'regionError')
		} else if (step === 2) {
			const text = document.getElementById('postTextInput')
			if (!text.value.trim() || text.value.trim().length < 100) {
				showFieldError(
					'postTextInput',
					'textError',
					'Минимум 100 символов'
				)
				valid = false
			} else clearFieldError('postTextInput', 'textError')
		}
		return valid
	}

	function showFieldError(fieldId, errorId, msg) {
		const field = document.getElementById(fieldId)
		const err = document.getElementById(errorId)
		if (field) field.classList.add('error')
		if (err) {
			err.textContent = msg || 'Это поле обязательно'
			err.classList.add('show')
		}
	}

	function clearFieldError(fieldId, errorId) {
		const field = document.getElementById(fieldId)
		const err = document.getElementById(errorId)
		if (field) field.classList.remove('error')
		if (err) err.classList.remove('show')
	}

	document.getElementById('nextBtn1')?.addEventListener('click', nextStep)
	document.getElementById('nextBtn2')?.addEventListener('click', nextStep)
	document.getElementById('prevBtn2')?.addEventListener('click', prevStep)
	document.getElementById('prevBtn3')?.addEventListener('click', prevStep)

	document.getElementById('submitPost')?.addEventListener('click', () => {
		const title = document.getElementById('postTitleInput').value.trim()
		const region = document.getElementById('postRegionInput').value
		const tags = document
			.getElementById('postTagsInput')
			.value.split(',')
			.map(t => t.trim())
			.filter(Boolean)
		const difficulty = document.getElementById('postDifficultyInput').value
		const duration = document.getElementById('postDurationInput').value
		const text = document.getElementById('postTextInput').value.trim()
		const excerpt = text.substring(0, 120) + '...'
		const imagesRaw = document.getElementById('postImagesInput').value
		let images = imagesRaw
			.split('\n')
			.map(s => s.trim())
			.filter(s => s.startsWith('http'))

		if (images.length === 0) {
			images.push(
				'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200'
			)
		}

		const post = saveNewPost({
			title,
			region,
			tags,
			difficulty,
			duration,
			text,
			excerpt,
			images,
			lat: markerLat || 60,
			lng: markerLng || 90
		})

		if (post) {
			showToast('Публикация успешно создана!')
			setTimeout(() => {
				window.location.href = `post.html?id=${post.id}`
			}, 1500)
		}
	})
}

function initMapExplorer() {
	const mapContainer = document.getElementById('mapExplorer')
	if (!mapContainer) return

	if (mapContainer.clientHeight === 0) {
		mapContainer.style.height = '100%'
	}

	const map = L.map('mapExplorer').setView([62, 95], 4)

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '© OpenStreetMap contributors',
		maxZoom: 18
	}).addTo(map)

	const posts = getPosts()

	const greenIcon = L.divIcon({
		html: `<div style="background:#6b8f52;width:14px;height:14px;border-radius:50%;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,.3)"></div>`,
		iconSize: [14, 14],
		className: ''
	})

	posts.forEach(post => {
		if (post.lat && post.lng) {
			const marker = L.marker([post.lat, post.lng], {
				icon: greenIcon
			}).addTo(map)
			marker.bindPopup(`
        <div style="font-family:'Geologica',sans-serif;min-width:200px">
          <img src="${post.images[0]}" style="width:100%;height:100px;object-fit:cover;border-radius:8px;margin-bottom:.5rem">
          <div style="font-size:.8rem;color:#6b8f52;font-weight:600;text-transform:uppercase">${post.region}</div>
          <div style="font-weight:700;margin:.2rem 0 .5rem;font-size:.95rem">${post.title}</div>
          <a href="post.html?id=${post.id}" style="color:#6b8f52;font-weight:600;font-size:.85rem">Читать отчёт →</a>
        </div>
      `)
		}
	})

	const listContainer = document.getElementById('mapSidebarList')
	if (listContainer) {
		listContainer.innerHTML = posts
			.map(
				post => `
      <div id="sidebar-${post.id}" style="padding:.75rem;border-radius:8px;cursor:pointer;transition:all .2s;border:1px solid transparent;margin-bottom:.5rem" 
           onmouseover="this.style.background='#eef4e8'" onmouseout="this.style.background=''"
           onclick="window.location.href='post.html?id=${post.id}'">
        <div style="font-size:.75rem;color:#6b8f52;font-weight:600;text-transform:uppercase">${post.region}</div>
        <div style="font-weight:600;font-size:.88rem;margin:.2rem 0">${post.title}</div>
        <div style="font-size:.78rem;color:#888">♥ ${post.likes} · ${post.tags[0] || ''}</div>
      </div>
    `
			)
			.join('')
	}

	setTimeout(() => {
		map.invalidateSize()
	}, 100)
}

function createPostCard(post) {
	const liked = isLiked(post.id)
	return `<div class="route-card" data-id="${post.id}">
    <div class="card-img-wrap">
      <img src="${post.images[0] || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'}" 
           alt="${post.title}" loading="lazy"
           onerror="this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'">
      <span class="card-badge">${post.difficulty || 'Маршрут'}</span>
      <button class="card-like ${liked ? 'liked' : ''}" data-post-id="${post.id}" onclick="event.stopPropagation()">
        <i class="fa-${liked ? 'solid' : 'regular'} fa-heart"></i>
      </button>
    </div>
    <div class="card-body">
      <div class="card-region">${post.region}</div>
      <div class="card-title">${post.title}</div>
      <div class="card-text">${post.excerpt}</div>
      <div class="d-flex gap-1 flex-wrap mb-2">
        ${(post.tags || [])
			.slice(0, 2)
			.map(t => `<span class="tag">${t}</span>`)
			.join('')}
      </div>
      <div class="card-meta">
        <div class="author" style="cursor:pointer" onclick="event.stopPropagation(); window.location.href='profile.html?user=${encodeURIComponent(post.author)}'">
          <img class="avatar-sm" src="${post.authorAvatar}" alt="${post.author}" onerror="this.style.display='none'">
          <span>${post.author}</span>
        </div>
        <div>♥ ${post.likes}</div>
      </div>
    </div>
  </div>`
}

function attachCardEvents() {
	document.querySelectorAll('.route-card').forEach(card => {
		card.addEventListener('click', e => {
			if (e.target.closest('.card-like')) return
			if (e.target.closest('.author')) return
			const id = card.dataset.id
			window.location.href = `post.html?id=${id}`
		})
	})

	document.querySelectorAll('.card-like').forEach(btn => {
		btn.addEventListener('click', () => {
			const postId = btn.dataset.postId
			const newCount = toggleLike(postId)
			if (newCount !== false) {
				const icon = btn.querySelector('i')
				if (isLiked(postId)) {
					btn.classList.add('liked')
					icon.className = 'fa-solid fa-heart'
				} else {
					btn.classList.remove('liked')
					icon.className = 'fa-regular fa-heart'
				}
				const card = btn.closest('.route-card')
				if (card) {
					const meta = card.querySelector('.card-meta div:last-child')
					if (meta) meta.textContent = `♥ ${newCount}`
				}
			}
		})
	})
}

function openLightbox(src) {
	let lb = document.getElementById('lightbox')
	if (!lb) {
		lb = document.createElement('div')
		lb.id = 'lightbox'
		lb.className = 'lightbox-overlay'
		lb.innerHTML = `<button class="lightbox-close" onclick="closeLightbox()">×</button><img id="lightboxImg" src="" alt="">`
		lb.addEventListener('click', e => {
			if (e.target === lb) closeLightbox()
		})
		document.body.appendChild(lb)
	}
	document.getElementById('lightboxImg').src = src
	lb.classList.add('open')
	document.body.style.overflow = 'hidden'
}

function closeLightbox() {
	const lb = document.getElementById('lightbox')
	if (lb) lb.classList.remove('open')
	document.body.style.overflow = ''
}

function initFAQ() {
	document.querySelectorAll('.faq-question').forEach(q => {
		q.addEventListener('click', () => {
			const answer = q.nextElementSibling
			const icon = q.querySelector('.faq-icon')
			const isOpen = answer.classList.contains('open')
			document
				.querySelectorAll('.faq-answer')
				.forEach(a => a.classList.remove('open'))
			document
				.querySelectorAll('.faq-icon')
				.forEach(i => (i.textContent = '+'))
			if (!isOpen) {
				answer.classList.add('open')
				if (icon) icon.textContent = '×'
			}
		})
	})
}

function initContactForm() {
	const form = document.getElementById('contactForm')
	if (!form) return
	form.addEventListener('submit', e => {
		e.preventDefault()
		showToast('Сообщение отправлено! Мы ответим в течение 24 часов.')
		form.reset()
	})
}

function formatDate(dateStr) {
	if (!dateStr) return ''
	const d = new Date(dateStr)
	return d.toLocaleDateString('ru-RU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	})
}

function debounce(fn, delay) {
	let timer
	return function (...args) {
		clearTimeout(timer)
		timer = setTimeout(() => fn.apply(this, args), delay)
	}
}

document.addEventListener('DOMContentLoaded', () => {
	initNavbarScroll()
	initAuthModals()
	initAuthUI()

	const page = document.body.dataset.page

	if (page === 'index') initIndexPage()
	else if (page === 'feed') initFeedPage()
	else if (page === 'post') initPostPage()
	else if (page === 'profile') initProfilePage()
	else if (page === 'add-post') initAddPostPage()
	else if (page === 'map-explorer') initMapExplorer()
	else if (page === 'contacts') {
		initFAQ()
		initContactForm()
	} else if (page === 'rules') initFAQ()
	else if (page === 'about') {
	}
})
