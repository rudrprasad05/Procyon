/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {

				'procyon-pink': '#FF914D',
				'procyon-purple': '#3b0764',
        'procyon-highlight-purple': '#6B21A8',
        'secondary-color': '#C4B5FD',
        'secondary-color-2': '#9333EA'
			  },
              height: {
                "10v": "10vh",
                "20v": "20vh",
                "30v": "30vh",
                "40v": "40vh",
                "50v": "50vh",
                "60v": "60vh",
                "70v": "70vh",
                "80v": "80vh",
                "90v": "90vh",
                "100v": "100vh",
            },
            scale: {
                '-100': '-1',
            },
		},
	},
	plugins: [],
}
