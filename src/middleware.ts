import { type NextRequest, NextResponse } from 'next/server'

import { PUBLIC_URL } from '@/config/url.config'

import { EnumTokens } from '@/services/auth/auth-token.serice'

export async function middleware(request: NextRequest) {
	const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	const isAuthPage = request.nextUrl.pathname.startsWith('/auth')

	if (isAuthPage) {
		if (refreshToken) {
			return NextResponse.redirect(new URL(PUBLIC_URL.home(), request.url))
		}
		return NextResponse.next()
	}

	// Защищенные маршруты
	const protectedRoutes = ['/profile', '/track/create']
	const isProtectedRoute = protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route))

	if (isProtectedRoute && !refreshToken) {
		const loginUrl = new URL(PUBLIC_URL.auth('/login'), request.url)
		loginUrl.searchParams.set('redirectedFrom', request.nextUrl.pathname)
		return NextResponse.redirect(loginUrl)
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/profile', '/track/create', '/auth/:path']
}
