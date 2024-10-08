import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{js,ts,html,svelte}'],
	theme: {
		extend: {
			colors: {
				accent: '#ee0000',
				'less-important': 'rgb(190, 190, 190)',
				'text-color': 'rgb(240, 240, 240)',
				outline: 'rgb(70, 70, 70)',

				background: {
					button: 'rgb(25, 25, 25)'
				},

				brands: {
					twitch: 'rgb(100, 65, 164)'
				}
			}
		}
	},
	plugins: [typography]
} satisfies Config;
