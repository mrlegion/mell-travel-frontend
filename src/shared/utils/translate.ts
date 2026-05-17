// Более простой вариант без сложной транслитерации
export const getAvatarColorSimple = (name: string | undefined): string => {
	if (!name || name.length === 0) return '#4a6cf7'

	const firstChar = name[0].toLowerCase()

	// Определяем алфавит и позицию буквы
	const russianChars = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
	const englishChars = 'abcdefghijklmnopqrstuvwxyz'

	let position = 0

	if (russianChars.includes(firstChar)) {
		position = russianChars.indexOf(firstChar)
	} else if (englishChars.includes(firstChar)) {
		position = englishChars.indexOf(firstChar)
	} else {
		position = firstChar.charCodeAt(0) % 26 // fallback для других символов
	}

	const colors = [
		'#ff6b6b',
		'#4ecdc4',
		'#45b7d1',
		'#96ceb4',
		'#feca57',
		'#ff9ff3',
		'#54a0ff',
		'#5f27cd',
		'#00d2d3',
		'#ff9f43',
		'#10ac84',
		'#ee5a24',
		'#0abde3',
		'#3867d6',
		'#8854d0',
		'#4b6584',
		'#20bf6b',
		'#0fb9b1',
		'#f78fb3',
		'#f8a5c2',
		'#63cdda',
		'#ea8685',
		'#596275',
		'#30336b',
		'#e056fd',
		'#6d214f'
	]

	return colors[position % colors.length]
}
