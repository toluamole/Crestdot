import * as React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import '@fontsource/raleway';
import { MainRoute } from './Routes/MainRoutes';
import { theme } from './Theme/BaseTheme';

export const App = () => (
	<ChakraProvider theme={theme}>
		<MainRoute />
	</ChakraProvider>
);
