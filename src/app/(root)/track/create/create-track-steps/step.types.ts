export type Step1 = {
	title: string
	region: string
	difficulty: string
	duration: string
	tags: string
}

export type Step2 = {
	text: string
}

export type Step3 = {
	images: string
}

export type StepData = Step1 &
	Step2 &
	Step3 & {
		lat: number | null
		lng: number | null
	}
