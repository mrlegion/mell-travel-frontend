import { useMutation } from '@tanstack/react-query'
import { ChangeEvent, useMemo, useRef } from 'react'
import { toast } from 'react-hot-toast'

import { fileService } from '@/services/file.service'

import { IFile } from '@/shared/types/file.interface'

export function useUpload(onChange: (value: string[]) => void, folder?: string) {
	const fileInputRef = useRef<HTMLInputElement>(null)

	const { mutate: uploadFiles, isPending: isUploading } = useMutation({
		mutationKey: ['upload files'],
		mutationFn: (formData: FormData) => fileService.upload(formData, folder),
		onSuccess(data: IFile[]) {
			onChange(data.map(file => file.url))
		},
		onError() {
			toast.error('Ошибка при загрузке файлов')
		}
	})

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const selectedFiles = event.target.files

		if (selectedFiles) {
			const fileArray = Array.from(selectedFiles)

			const formData = new FormData()
			fileArray.forEach(file => formData.append('files', file))

			uploadFiles(formData)
		}
	}

	const handleButtonClick = () => {
		fileInputRef.current?.click()
	}

	const triggerChange = (files?: FileList | null) => {
		if (fileInputRef.current) {
			// Если переданы файлы — устанавливаем их
			if (files) {
				const event = Object.defineProperty(new Event('change', { bubbles: true }), 'target', {
					writable: false,
					value: { files }
				})
				fileInputRef.current.dispatchEvent(event)
			} else {
				// Иначе просто сбрасываем
				fileInputRef.current.value = ''
				fileInputRef.current.dispatchEvent(new Event('change', { bubbles: true }))
			}
		}
	}

	return useMemo(
		() => ({
			handleButtonClick,
			isUploading,
			fileInputRef,
			handleFileChange,
			triggerChange
		}),
		[handleButtonClick, isUploading, fileInputRef, handleFileChange, triggerChange]
	)
}
