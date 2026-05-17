type ClassValue = string | number | null | undefined | boolean | ClassArray | ClassDictionary
interface ClassDictionary {
	[id: string]: any
}
interface ClassArray extends Array<ClassValue> {}

export function cm(...args: ClassValue[]): string {
	let result = ''

	for (let i = 0; i < args.length; i++) {
		const arg = args[i]

		if (!arg) continue

		if (typeof arg === 'string' || typeof arg === 'number') {
			result += (result ? ' ' : '') + arg
		} else if (Array.isArray(arg)) {
			const inner = cm.apply(null, arg as any)
			if (inner) {
				result += (result ? ' ' : '') + inner
			}
		} else if (typeof arg === 'object') {
			for (const key in arg) {
				if (arg[key]) {
					result += (result ? ' ' : '') + key
				}
			}
		}
	}

	return result
}
