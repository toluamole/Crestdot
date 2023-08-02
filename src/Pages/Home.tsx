import { Box, Button, Flex, Stack, Text, Image, useDisclosure, Heading, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { Navigation } from './Components/Navigation';
import facebookIcon from '../Assets/svg/facebookIcon.svg';
import instagramIcon from '../Assets/svg/instagramIcon.svg';
import twitter from '../Assets/svg/twitter.svg';
import linkedin from '../Assets/svg/linkedin.svg';
import rightArrow from '../Assets/svg/rightArrow.svg';
import circle from '../Assets/svg/cricle.svg';
import pie from '../Assets/svg/pie.svg';
import { Link as RLink } from 'react-router-dom';
import { AppRoutes } from '../Routes/AppRoutes';
import sliderImage3 from '../Assets/Images/sliderImage3.png';
import Hero from '../Assets/Images/Hero.png';
import { CustomModal } from '../Components/Icons/CustomModal';

export const socialIcons = [
	{
		id: 0,
		src: facebookIcon,
		path: 'https://www.facebook.com/crestdotApp '
	},
	{
		id: 1,
		src: instagramIcon,
		path: 'https://www.instagram.com/crestdotApp '
	},
	{
		id: 2,
		src: linkedin,
		path: 'https://www.linkedin.com/in/crestdot'
	},
	{
		id: 3,
		src: twitter,
		path: 'https://www.twitter.com/crestdot'
	}
];

export const Home = () => {
	const [isLargerThan736] = useMediaQuery('(min-width: 736px)');
	const { isOpen, onOpen, onClose } = useDisclosure();
	return(
		<>
			<Image position={'absolute'} top={'2%'} left={'50%'} src={circle} w={'20px'} h={'20px'} />
			<Flex
				w={'100%'}
				minH={'100vh'}
				px={['20px', null, '40px', null, '130px']}
				bgColor={'#F0EEE2'}
				{...(!isLargerThan736 && {
					bgImage: `linear-gradient(180deg, rgba(240, 238, 226, 0.80) 0%, #F0EEE2 100%) , url('${sliderImage3}')`,
				})}
				bgRepeat={'no-repeat'}
				direction={'column'}
				justifyContent={'space-between'}
				maxW={'1440px'} m={'0 auto'}
			>

				<Navigation pathName='About Us' onOpen={onOpen} path={AppRoutes.about} />
				<Flex direction={['column', null, null, 'row']} pt={['50px', '80px']} justifyContent={'space-between'}>
					<Stack mt={['', null, null, null, '30px']} spacing={['25px', '30px', '30px']} justify={'flex-start'}>
						{ isLargerThan736 && <Heading display={['none', 'flex']} w={ 'full'} h={['144px', '177px']} color={'darkGreen'} fontWeight={'bold'} fontSize={ '50px'}>
							Keep all your school needs managed and organized in just one application
						</Heading>}
						{!isLargerThan736 && <Heading w={'auto'} h={'144px'} color={'darkGreen'} fontWeight={'bold'} fontSize={'35px'}>
							Keep all your school  needs organized in just one application
						</Heading>}
						<Text w={['335px', 'auto']} color={'brown.200'} mt={['', '25px']} fontWeight={'medium'} fontSize={['14px', '18px']}>
							Be the first to know when we launch. Join the waitlist to access the
							best management app for all of your day to day school needs.
						</Text>

						<Button
							type='submit'
							variant={'primary'}
							w={'151px'}
							h={'50px'}
							onClick={onOpen}
							rightIcon={<Image src={rightArrow} />}
						>
							Join waitlist
						</Button>
					</Stack>
					<Image objectFit={'contain'} display={['none', null, null, 'flex']} w={'487px'} h={'500px'} src={Hero} />
				</Flex>
				<Image position={'absolute'} left={0} bottom={'4%'} src={pie} />
				<Flex mb={'40px'} justifyContent={'center'} alignItems={'center'}>
					{socialIcons.map((icon) => {
						return (
							<Box
								key={icon.id}
								mr={'30px'}
								border={'1px solid darkGreen'}
								borderRadius={'50px'}
								as={RLink}
								to={icon.path}
								cursor={'pointer'}
							>
								<Image w={'30px'} h={'30px'} p={'9px'} src={icon.src} />
							</Box>
						);
					})}
				</Flex>
			</Flex>
			<CustomModal isOpen={isOpen}  onClose={onClose} / >
		</>
	);
};