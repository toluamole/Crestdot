import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const primary = defineStyle({
	fontWeight: '500',
	bgColor: 'darkGreen',
	borderRadius: '50px',
	color: '#FFFFFF',

	_hover: {
		bgColor: '#FFE931',
		color: 'darkGreen'
	}
});

const secondary = defineStyle({
	fontWeight: '500',
	bgColor: '#F0EEE2',
	borderRadius: '50px',
	color: 'darkGreen',

	_hover: {
		bgColor: '#F0EEE2'
	}
});

export const buttonTheme = defineStyleConfig({
	variants: {primary, secondary}
});