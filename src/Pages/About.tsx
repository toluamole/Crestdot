import { Box, Button, Divider, HStack, Heading, SimpleGrid, Stack, Text, Image, Flex, FormLabel, Input, Modal, ModalBody, ModalContent, ModalOverlay, Select, chakra, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { Navigation } from './Components/Navigation';
import { Collaboration, Energy, Innovation, TrustIcon, Workflow } from '../Components/Icons/Trust';
import background from '../Assets/Images/background.png';
import { socialIcons } from './Home';
import { Link as RLink } from 'react-router-dom';
import { AboutJumbotron } from './Components/AboutJumbotron';
import { AppRoutes } from '../Routes/AppRoutes';
import modalImage from '../Assets/Images/modalImage.png';
import rightArrow from '../Assets/svg/rightArrow.svg';

export const About = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return(
		<><Stack
			w={'full'}
			minH={'100vh'}
			// maxH={'100vh'}
			px={['20px', null, '50px', '130px']}
			maxW={'1440px'} m={'0 auto'}
			bgColor={'#F0EEE2'}
			direction={'column'}
			overflowX={'hidden'}
		>
			<Navigation onOpen={onOpen}  />
			<AboutJumbotron />
			<SimpleGrid mt={['145px', '-10px']} columns={[1, null, null, null, 2]} spacingY={['30px', '60px']} spacingX={'80px'}>
				<Stack
					ml={[0, -6]}
					border={'1px solid #F0EEE2 '}
					width={['335px', null, 'auto', null, '570px']}
					h={['auto', null, null, null, '500px']} p={[0, 6]}
					bgColor={'#F0EEE2'}
				>
					<Heading fontSize={['26px', '40px']} mb={'30px'} fontStyle={'40px'} fontWeight={'medium'} color={'brown.100'}>
						Our core values -<br /> what makes us special
					</Heading>
					<Divider mb={'50px'} w={'120px'} border={'2px solid darkGreen'} />
					<TrustIcon p={2} bgColor={'#1249440D'} boxSize={'50px'} />
					<Text fontSize={['16px', '20px']} fontWeight={500} color={'brown.100'}>Trust</Text>
					<Text color={'brown.100'} fontSize={['14px', '18px']}>
						{'We believe so much in trust. It is the foundation for every solid relationship. Every school\'s stakeholders must trust the school\'s operations and management methods.'}
						{'This is important to us, and it is the reason we are committed to delivering a product that ensures that the process of delivering quality education and administrative management is trusted.'}
					</Text>
				</Stack>
				<Stack spacing={'10px'} mt={[null, null, null, null, '210px']} w={['335px', null, 'auto', null, '530px']} h={['auto', null, null, null, '192px']}>
					<Collaboration p={2} bgColor={'#1249440D'} boxSize={'50px'} />
					<Text fontSize={['16px', '20px']} fontWeight={500} color={'brown.100'}>Collaboration</Text>
					<Text color={'brown.100'} fontSize={['14px', '18px']}>
						{'We believe so much in trust. It is the foundation for every solid relationship. Every school\'s stakeholders must trust the school\'s operations and management methods.'}
						{'This is important to us, and it is the reason we are committed to delivering a product that ensures that the process of delivering quality education and administrative management is trusted.'}
					</Text>
				</Stack>
				<Stack spacing={'10px'} w={['335px', null, 'auto', null, '530px']} h={['auto', '250px']}>
					<Energy p={2} bgColor={'#1249440D'} boxSize={'50px'} />
					<Text fontSize={['16px', '20px']} fontWeight={500} color={'brown.100'}>Efficiency</Text>
					<Text color={'brown.100'} fontSize={['14px', '18px']}>
						{'We believe so much in trust. It is the foundation for every solid relationship. Every school\'s stakeholders must trust the school\'s operations and management methods.'}
						{'This is important to us, and it is the reason we are committed to delivering a product that ensures that the process of delivering quality education and administrative management is trusted.'}
					</Text>
				</Stack>
				<Stack spacing={'10px'} w={['335px', null, 'auto', null, '530px']} h={['auto', '250px']}>
					<Innovation p={2} bgColor={'#1249440D'} boxSize={'50px'} />
					<Text fontSize={['16px', '20px']} fontWeight={500} color={'brown.100'}>Innovation</Text>
					<Text color={'brown.100'} fontSize={['14px', '18px']}>
						{'We believe so much in trust. It is the foundation for every solid relationship. Every school\'s stakeholders must trust the school\'s operations and management methods.'}
						{'This is important to us, and it is the reason we are committed to delivering a product that ensures that the process of delivering quality education and administrative management is trusted.'}
					</Text>
				</Stack>
				<Stack spacing={'10px'} w={['335px', null, 'auto', null, '530px']} h={['auto', '250px']}>
					<Workflow p={2} bgColor={'#1249440D'} boxSize={'50px'} />
					<Text fontSize={['16px', '20px']} fontWeight={500} color={'brown.100'}>Seamless Workflow</Text>
					<Text color={'brown.100'} fontSize={['14px', '18px']}>
						{'We believe so much in trust. It is the foundation for every solid relationship. Every school\'s stakeholders must trust the school\'s operations and management methods.'}
						{'This is important to us, and it is the reason we are committed to delivering a product that ensures that the process of delivering quality education and administrative management is trusted.'}
					</Text>
				</Stack>
			</SimpleGrid>
			<Stack
				backgroundImage={`url(${background})`}
				bgSize={'cover'}
				bgPos={'center'}
				bgRepeat={'no-repeat'}
				h={['239px', '500px']}
				w={'full'}
				my={'70px'}
				justify={'center'}
				align={'center'}
				spacing={'10px'}
			>
				<Text fontWeight={'medium'} fontSize={['26px', '40px']} color={'#FFFFFF'}>Get to know us better</Text>
				<Text mb={'20px'} textAlign={'center'} w={['219px', '600px']} color={'#FFFFFF'} fontSize={['10px', '18px']}>Schedule a call with us today to know us better and how our product can make your school management easier</Text>
				<Button
					fontSize={'14px'}
					w={['141px', '230px']}
					h={['50px', '60px']}
					bgColor={'#FFE931'}
					color={'darkGreen'}
					variant={'secondary'} as={RLink}
					to={'https://calendar.google.com/calendar/embed?src=crestdot%40gmail.com&ctz=Africa%2FLagos '}>Schedule a call</Button>
			</Stack>
			<Divider border={'1px solid #525252'} />
			<Stack direction={['column-reverse', 'row']} spacing={'20px'} alignItems={'center'} mt={['20px', '10px']} mb={'50px'} justify={'space-between'}>
				<Text color={'brown.100'} fontSize={['12px', '16px']}>©2023. Crestdot SMAS All rights reserved</Text>
				<HStack>
					{socialIcons.map((icon) => {
						return (
							<Box
								key={icon.id}
								// mr={'30px'} 
								border={'1px solid darkGreen'}
								borderRadius={'50px'}
								as={RLink}
								to={icon.path}
								cursor={'pointer'}
							>
								<Image w={'30px'} h={'30px'} p={'9px'} src={icon.src} />
							</Box>
						);
					})};
				</HStack>
			</Stack>
		</Stack><Modal isOpen={isOpen} onClose={onClose} size={'3xl'} isCentered>
			<ModalOverlay />
			<ModalContent right={['0', '150px']} h={'550px'} borderLeftRadius={'10px'} bgColor={'#fff'}>
				{/* <ModalCloseButton /> */}
				<ModalBody w={'full'} display={'flex'} borderRadius={'none'}>

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
						<Select name='category' mb={'30px'} bgColor={'#F6F6F6'} color={'#8B8B8B'} _placeholder={{ color: '#C4C4C4' }} placeholder='Select category'>
							<chakra.option bgColor={'#F6F6F6'}>Teacher</chakra.option>
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

					<Image display={['none', 'flex']} pos={'relative'} bottom={'1.5%'} left={'23.5%'} src={modalImage} w={'550px'} h={'550px'} objectFit={'cover'} />
				</ModalBody>
			</ModalContent>
		</Modal></>
	);
};