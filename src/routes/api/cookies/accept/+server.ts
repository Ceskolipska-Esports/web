export const POST = async ({ cookies, url }) => {
	const allowedLevels = Object.freeze(['required']);

	const level = url.searchParams.get('level');
	if (!level || !allowedLevels.includes(level)) {
		console.error(`Invalid cookie acceptance level: ${level}`);
		return new Response(null, { status: 400 });
	}

	cookies.set('cesports-gdpr', level, {
		path: '/'
	});

	return new Response();
};
