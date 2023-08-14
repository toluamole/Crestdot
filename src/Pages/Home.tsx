import { Box, Button, Flex, Stack, Text, Image, useDisclosure, Heading, useMediaQuery, Icon} from '@chakra-ui/react';
import React from 'react';
import { Navigation } from './Components/Navigation';
import rightArrow from '../Assets/svg/rightArrow.svg';
import circle from '../Assets/svg/cricle.svg';
import { Link as RLink } from 'react-router-dom';
import { AppRoutes } from '../Routes/AppRoutes';
import sliderImage3 from '../Assets/Images/sliderImage3.png';
import { CustomModal } from '../Components/Icons/CustomModal';
import firstHeroImage from '../Assets/Images/FirstHeroImage.png';
import secondHeroImage from '../Assets/Images/secondHeroImage.png';
import {BiLogoFacebook} from 'react-icons/bi';
import {AiOutlineInstagram} from 'react-icons/ai';
import {GrLinkedinOption} from 'react-icons/gr';
import {AiOutlineTwitter} from 'react-icons/ai';


export const socialIcons = [
	{
		id: 0,
		src: BiLogoFacebook,
		path: 'https://www.facebook.com/crestdotApp ',
	},
	{
		id: 1,
		src: AiOutlineInstagram,
		path: 'https://www.instagram.com/crestdotApp ',
	},
	{
		id: 2,
		src: GrLinkedinOption,
		path: 'https://www.linkedin.com/in/crestdot',
	},
	{
		id: 3,
		src: AiOutlineTwitter,
		path: 'https://www.twitter.com/crestdot',
	},
];

export const Home = () => {
	const [isLargerThan900] = useMediaQuery('(min-width: 900px)');
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Image position={'absolute'} top={'2%'} left={'50%'} src={circle} w={'20px'} h={'20px'} />
			<Flex
				w={'100%'}
				minH={'100vh'}
				px={['17px', null, '40px', null, '110px']}
				bgColor={'#F0EEE2'}
				{...(!isLargerThan900 && {
					bgImage: `linear-gradient(180deg, rgba(240, 238, 226, 0.80) 0%, #F0EEE2 100%) , url('${sliderImage3}')`,
				})}
				bgSize={'cover'}
				bgRepeat={'no-repeat'}
				direction={'column'}
				justifyContent={'space-between'}
				maxW={'1440px'}
				m={'0 auto'}
			>
				<Navigation pathName='About Us' onOpen={onOpen} path={AppRoutes.about} />
				<Flex direction={['column', null, null, 'row']} pt={['50px', '40px']} justifyContent={'space-between'}>
					<Stack mt={['', null, null, null, '30px']} spacing={['25px', '30px', '30px']} justify={'flex-start'}>
						{isLargerThan900 && (
							<Heading
								display={['none', 'flex']}
								w={'auto'}
								h={['144px', '177px']}
								color={'darkGreen'}
								fontWeight={'extrabold'}
								fontSize={['50px','50px']}
							>
								Keep all your school
								<br /> needs organized in <br /> just one application
							</Heading>
						)}
						{!isLargerThan900 && (
							<Heading w={['auto','auto']} h={'144px'} color={'darkGreen'} fontWeight={'bold'} fontSize={['35px','50px']}>
								Keep all your school needs organized in just one application
							</Heading>
						)}
						<Text
							w={['335px','494px']}
							color={'brown.200'}
							mt={['', null, '30px', '30px']}
							fontWeight={'medium'}
							fontSize={['14px', '18px']}
						>
							Be the first to know when we launch. Join the waitlist to access the best management app for all of your
							day to day school needs.
						</Text>
						<Flex alignItems={'center'} justifyContent={'center'} border={'0.5px solid rgba(120, 82, 38, 0.50)'} borderRadius={'50px'} w={['99px','160px']} h={['48px','60px']}>
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
						</Flex>
					</Stack>
					<Flex>
						<Image objectFit={'contain'} display={['none', null, null, 'flex']} w={['auto','300px']} h={'500px'} src={firstHeroImage} cursor={'pointer'} transition={'all .2s ease'} _hover={{transform: 'translateY(-10px)'}} />
						<Image objectFit={'contain'} display={['none', null, null, 'flex']} w={['auto','300px']} h={'500px'} src={secondHeroImage} pos={'relative'} cursor={'pointer'} bottom={'7%'} transition={'all .2s ease'} _hover={{transform: 'translateY(-10px)'}}/>
					</Flex>
				</Flex>
				<Flex mb={'40px'} justifyContent={'center'} alignItems={'center'}>
					{socialIcons.map((icon) => {
						return (
							<Box
								key={icon.id}
								mr={'30px'}
								border={'1px solid darkGreen'}
								w={'30px'} h={'30px'}
								borderRadius={'50%'}
								as={RLink}
								to={icon.path}
								cursor={'pointer'}
								color={'#124944'}
								_hover={{
									bg: '#FFE931',
									border: '1px solid #FFE931 '
								}}
								transition={'all ease .2s'}
							>
								<Icon  boxSize={'30px'}   p={2}  as={icon.src} />
							</Box>
						);
					})}
				</Flex>
			</Flex>
			<CustomModal isOpen={isOpen} onClose={onClose} />
		</>
	);
};
