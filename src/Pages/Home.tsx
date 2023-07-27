import { Box, Button, Flex,  FormControl,  FormLabel,  Heading,  Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, Text, chakra, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { Navigation } from './Components/Navigation';
import pattern from '../Assets/Images/pattern.png';
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
import modalImage from '../Assets/Images/modalImage.png';
import Hero from '../Assets/Images/Hero.png';

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
	const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
	const { isOpen, onOpen, onClose } = useDisclosure();
	return(
		<><Image position={'absolute'} top={'2%'} left={'50%'} src={circle} w={'20px'} h={'20px'} /><Flex
			w={'100%'}
			minH={'100vh'}
			px={['20px', null, '40px', null, '130px']}
			bgColor={'#F0EEE2'}
			{...(!isLargerThan800 && {
				bgImage: `linear-gradient(180deg, rgba(240, 238, 226, 0.80) 0%, #F0EEE2 100%) , url('${sliderImage3}')`,
			})}
			bgRepeat={'no-repeat'}
			direction={'column'}
			justifyContent={'space-between'}
			maxW={'1440px'} m={'0 auto'}
		>

			<Navigation pathName='About Us' onOpen={onOpen} path={AppRoutes.about} />
			<Flex direction={['column', null, null, 'row']} pt={['50px', '80px']} justifyContent={'space-between'}>
				<Stack mt={['', null, null, null, '30px']} spacing={['25px', '30px']} justify={'flex-start'}>
					{ isLargerThan800 && <Heading display={['none', 'flex']} w={ 'auto'} mb={[null,'50px', null, null, 0]} h={['144px', '177px']} color={'darkGreen'} fontWeight={'bold'} fontSize={['32px', '50px']}>
						Keep all your school needs managed and organized in just one application
					</Heading>}
					{!isLargerThan800 && <Heading w={'335px'} h={'144px'} color={'darkGreen'} fontWeight={'bold'} fontSize={'35px'}>
						Keep all your school  needs organized in just one application
					</Heading>}
					<Text w={['335px', '557px']} color={'brown.200'} fontWeight={'medium'} fontSize={['14px', '18px']}>
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
		<Modal isOpen={isOpen} onClose={onClose} size={'3xl'} isCentered >
			<ModalOverlay />
			<ModalContent right={['0','150px']} h={'550px'} borderLeftRadius={'10px'}  bgColor={'#fff'} >
				{/* <ModalCloseButton /> */}
				<ModalBody  w={'full'}  display={'flex'}  borderRadius={'none'} >
					
					<chakra.form className="launchlist-form" action="https://getlaunchlist.com/s/t2L2mc" method="POST">
						<Heading my={'40px'} fontSize={'28px'} color={'#000'}>Join the Cresdot Waitlist</Heading>
						<FormLabel color={'#000'}>Full Name</FormLabel>
						<Input
							name='name'
							type='text'
							w={['335px', '330px']}
							color={'#8B8B8B'}
							_placeholder={{ color: '#C4C4C4' }}
							placeholder='Full name'
							bgColor={'#F6F6F6'}
							mb={'30px'} />
						<FormLabel color={'#000'}>Email address</FormLabel>
						<Input
							name='email'
							type='email'
							w={['335px', '330px']}
							color={'#8B8B8B'}
							bgColor={'#F6F6F6'}
							_placeholder={{ color: '#C4C4C4' }}
							placeholder='Enter your email address'
							mb={'30px'} />
						<FormLabel color={'#000'}>User Category</FormLabel>
						<Select name='category' mb={'30px'} bgColor={'#F6F6F6'} color={'#8B8B8B'} _placeholder={{ color: '#C4C4C4' }} placeholder='Select country'>
							<chakra.option bgColor={'#F6F6F6'} >Teacher</chakra.option>
							<chakra.option bgColor={'#F6F6F6'}>Student</chakra.option>
						</Select>
						<Flex
							border={'0.5px solid rgba(120, 82, 38, 0.50)'}
							borderRadius={'50px'} w={'161px'} h={'60px'}
							justifyContent={'center'} alignItems={'center'}
							mb={['182px', '80px']}
						>
							<Button
								type='submit'
								variant={'primary'}
								w={'151px'}
								h={'50px'}
								rightIcon={<Image src={rightArrow} />}
							>
							Join waitlist
							</Button>
						</Flex>
					</chakra.form>
					
					<Image display={['none','flex']} pos={'relative'} bottom={'1.5%'} left={'23.5%'} src={modalImage} w={'550px'} h={'550px'} objectFit={'cover'} />
				</ModalBody>
			</ModalContent>
		</Modal>
		</>
	);
};