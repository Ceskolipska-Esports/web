import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals: { session }, cookies }) => {
	return {
		session,
		cookieConsent: cookies.get('cesports-gdpr'),
		cookies: cookies.getAll()
	};
};
