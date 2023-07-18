import { BoxProps, Box, Image, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import sliderImage1 from '../../Assets/Images/sliderImage1.png';
import sliderImage2 from '../../Assets/Images/sliderImage2.png';
import sliderImage3 from '../../Assets/Images/sliderImage3.png';
import sliderImage4 from '../../Assets/Images/sliderImage4.jpg';

export const MotionBox = motion<BoxProps>(Box);


const sliderItems = [
	{
		id: 0,
		src: sliderImage1,
		// imageStyle: {
		// 	mb: 4,
		// }
	},
	{
		id: 1,
		src: sliderImage2,
		imageStyle: {
			mt: 24,
		}
	},
	{
		id: 2,
		src: sliderImage3
	},
	{
		id: 3,
		src: sliderImage4,
		imageStyle: {
			mt: 24,
		}
	}
];
export const SlidingItemsContainer = () => {

	return (
		<MotionBox position={'relative'} top={['-23%', null, '-39%','-50%']}>
			<HStack spacing={['4px','10px']}  pl={['130px','130px']} overflow={'hidden'} justifyContent={'space-between'} alignItems={'center'} w={['180vw','110vw']}>
				{sliderItems.map((item) => (
					<HStack justifyContent={'space-between'}  key={item.id} direction={'column'}>
						<Image objectFit={'cover'}  w={['200px','500px']} h={['150px', null, '350px','450px']} src={item.src} {...item?.imageStyle}  />
					</HStack>
				))}
			</HStack>
		</MotionBox>
	);
};
