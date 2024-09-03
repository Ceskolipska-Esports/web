import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{js,ts,html,svelte}'],
	theme: {
		extend: {
			colors: {
				accent: '#ee0000'
			}
		}
	},
	plugins: []
} satisfies Config;
