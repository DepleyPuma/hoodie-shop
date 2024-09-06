/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				'drop-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0)',
						animationTimingFunction: 'cubic-bezier(0.34, 1.61, 0.7, 1)',
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)',
					},
				},
			},
			animation: {
				dropin: 'drop-in 0.3s ease-in-out 1 both',
			},
		},
	},
	plugins: [],
};
