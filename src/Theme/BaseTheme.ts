import { extendTheme } from '@chakra-ui/react';
import { buttonTheme } from './Components/ButtonTheme';

const breakpoints = {
	sm: '30em',
	md: '48em',
	lg: '62em',
	xl: '80em',
	'2xl': '96em',
};

export const theme = extendTheme({
	breakpoints,
	styles: {
		global: {
			'html, body': {
				bgColor: '#F0EEE2',
				width: '100%'
			}
		},
	},
	colors: {
		darkGreen: '#124944',
		brown: {
			100: '#202020',
			200: '#785226'
		},
	},
	fonts: {
		heading: 'Raleway',
		body: 'Raleway',
	},
	fontWeights: {
		hairline: 100,
		thin: 200,
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800,
		black: 900,
	},
	components: {
		Button: buttonTheme
	},
});
