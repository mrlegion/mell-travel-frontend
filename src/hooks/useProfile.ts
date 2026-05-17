import { useQuery } from '@tanstack/react-query'

import { profileService } from '@/services/profile.service'

export function useProfile() {
	const { data: user, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => profileService.getMe()
	})

	return { user, isLoading }
}
