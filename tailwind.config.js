/** @type {import('tailwindcss').Config} */

const spacing = () => {
	return Object.fromEntries(
		Array.from({ length: 7501 }).map((i, index) => [
			index / 10,
			process.env.TARO_ENV === 'h5' ? `${index / 100 / 4}rem` : `${index / 10}px`,
		]),
	);
};

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'media',
	theme: {
		extend: {
			spacing: spacing(),
			fontSize: spacing(),
			lineHeight: spacing(),
		},
	},
	variants: {},
	plugins: [],
};
