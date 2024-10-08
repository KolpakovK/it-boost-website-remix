import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '0rem',
				xl: '0rem',
			},
		},
		fontFamily:{
			'sans': ['IBM Plex Sans', 'system-ui'],
			'mono': ['IBM Plex Sans', 'ui-monospace'],
			'display': ['Dela Gothic One', 'system-ui'],
		},
		fontSize: {
			'sm': '0.38rem',
			'tiny': '0.8rem',
			'base': '1rem',
			'lg': '1.5rem',
			'xl': '2rem',
			'2xl': '2.5rem',
			'3xl': '3.5rem',
			'4xl': '5rem',
			'5xl': '6.5rem',
		},
		extend: {
			colors:{
				"black":"#1A202C",
				"white":"#FFFFFF",
				'green': {
					'50': '#f1fce9',
					'100': '#e0f8cf',
					'200': '#c3f1a5',
					'300': '#9ce670',
					'400': '#84da53',
					'500': '#5abc26',
					'600': '#43961a',
					'700': '#347318',
					'800': '#2d5b19',
					'900': '#284e19',
					'950': '#112a09',
				},
				'orange': {
					'50': '#fff4ed',
					'100': '#ffe5d4',
					'200': '#ffc6a9',
					'300': '#ff9f72',
					'400': '#fe6530',
					'500': '#fd4512',
					'600': '#ee2b08',
					'700': '#c51c09',
					'800': '#9c1810',
					'900': '#7e1710',
					'950': '#440706',
				},
				'yellow': {
					'50': '#fffaeb',
					'100': '#feefc7',
					'200': '#fddf8a',
					'300': '#fdc84c',
					'400': '#fcb630',
					'500': '#f68f0a',
					'600': '#da6905',
					'700': '#b54808',
					'800': '#92380e',
					'900': '#782e0f',
					'950': '#451603',
				},
				'blue': {
					'50': '#ecf4ff',
					'100': '#ddeaff',
					'200': '#c2d7ff',
					'300': '#9cbcff',
					'400': '#7595ff',
					'500': '#5570ff',
					'600': '#3645f5',
					'700': '#2a35d8',
					'800': '#2530ae',
					'900': '#263189',
					'950': '#161a50',
				},
				'violet': {
					'50': '#f3f2ff',
					'100': '#ebe7ff',
					'200': '#d9d3ff',
					'300': '#bcafff',
					'400': '#9c82ff',
					'500': '#7d4fff',
					'600': '#7130fc',
					'700': '#6019e8',
					'800': '#4f15c2',
					'900': '#43139f',
					'950': '#27096c',
				},
				
			}
		},
	},
  plugins: [],
} satisfies Config;
