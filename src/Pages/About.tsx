import { Box, Button, Divider, HStack, Heading, SimpleGrid, Stack, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { Navigation } from './Components/Navigation';
import { Collaboration, Energy, Innovation, TrustIcon, Workflow } from '../Components/Icons/Trust';
import background from '../Assets/Images/background.png';
import { socialIcons } from './Home';
import { Link as RLink } from 'react-router-dom';
import { AboutJumbotron } from './Components/AboutJumbotron';
import { AppRoutes } from '../Routes/AppRoutes';

export const About = () => {
	return(
		<Stack
			w={'full'}
			minH={'100vh'}
			// maxH={'100vh'}
			px={['20px', null, '50px','130px']}
			maxW={'1440px'} m={'0 auto'}
			bgColor={'#F0EEE2'}
			direction={'column'}
			overflowX={'hidden'}
		>
			<Navigation pageName='Home' path={AppRoutes.home}/>
			<AboutJumbotron/>
			<SimpleGrid mt={['145px', '-10px']} columns={[1, null, null,2]} spacingY={['30px','60px']} spacingX={'80px'} >
				<Stack 
					ml={[0,-6]} 
					border={'1px solid #F0EEE2 '} 
					width={['335px',null, 'auto','570px']} 
					h={['auto', null, null,'500px']} p={[0,6]}  
					bgColor={'#F0EEE2'}
					// mb={'-80px'}
				>
					<Heading fontSize={['26px', '40px']} mb={'30px'} fontStyle={'40px'} fontWeight={'medium'} color={'brown.100'}>
						Our core values -<br/> what makes us special
					</Heading>
					<Divider mb={'50px'} w={'120px'} border={'2px solid darkGreen'} />
					<TrustIcon p={2} bgColor={'#1249440D'} boxSize={'50px'} />
					<Text fontSize={['16px','20px']} fontWeight={500} color={'brown.100'}>Trust</Text>
					<Text color={'brown.100'} fontSize={['14px','18px']}>
						{'We believe so much in trust. It is the foundation for every solid relationship. Every school\'s stakeholders must trust the school\'s operations and management methods.'}
						{'This is important to us, and it is the reason we are committed to delivering a product that ensures that the process of delivering quality education and administrative management is trusted.'}
					</Text>
				</Stack>
				<Stack spacing={'10px'} mt={[null, null, null,'210px']} w={['335px',null, 'auto','530px']} h={['auto', null, null,'192px']}>
					<Collaboration p={2} bgColor={'#1249440D'} boxSize={'50px'} />
					<Text fontSize={['16px','20px']} fontWeight={500} color={'brown.100'}>Collaboration</Text>
					<Text color={'brown.100'} fontSize={['14px','18px']}>
						{'We believe so much in trust. It is the foundation for every solid relationship. Every school\'s stakeholders must trust the school\'s operations and management methods.'}
						{'This is important to us, and it is the reason we are committed to delivering a product that ensures that the process of delivering quality education and administrative management is trusted.'}
					</Text>
				</Stack>
				<Stack spacing={'10px'} w={['335px',null, 'auto','530px']} h={['auto','250px']} >
					<Energy p={2}  bgColor={'#1249440D'} boxSize={'50px'} />
					<Text fontSize={['16px','20px']} fontWeight={500} color={'brown.100'}>Efficiency</Text>
					<Text color={'brown.100'} fontSize={['14px','18px']}>
						{'We believe so much in trust. It is the foundation for every solid relationship. Every school\'s stakeholders must trust the school\'s operations and management methods.'}
						{'This is important to us, and it is the reason we are committed to delivering a product that ensures that the process of delivering quality education and administrative management is trusted.'}
					</Text>
				</Stack>
				<Stack spacing={'10px'}  w={['335px', null, 'auto','530px']} h={['auto','250px']}>
					<Innovation p={2} bgColor={'#1249440D'} boxSize={'50px'} />
					<Text fontSize={['16px','20px']} fontWeight={500} color={'brown.100'}>Innovation</Text>
					<Text color={'brown.100'} fontSize={['14px','18px']}>
						{'We believe so much in trust. It is the foundation for every solid relationship. Every school\'s stakeholders must trust the school\'s operations and management methods.'}
						{'This is important to us, and it is the reason we are committed to delivering a product that ensures that the process of delivering quality education and administrative management is trusted.'}
					</Text>
				</Stack>
				<Stack spacing={'10px'}  w={['335px', null, 'auto','530px']} h={['auto','250px']} >
					<Workflow p={2} bgColor={'#1249440D'} boxSize={'50px'} />
					<Text fontSize={['16px','20px']} fontWeight={500} color={'brown.100'}>Seamless Workflow</Text>
					<Text color={'brown.100'} fontSize={['14px','18px']}>
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
				h={['239px','500px']}
				w={'full'}
				my={'70px'}
				justify={'center'}
				align={'center'}
				spacing={'10px'}
			>
				<Text fontWeight={'medium'} fontSize={['26px','40px']} color={'#FFFFFF'}>Get to know us better</Text>
				<Text mb={'20px'} textAlign={'center'} w={['219px','600px']} color={'#FFFFFF'} fontSize={['10px','18px']}>Schedule a call with us today to know us better and how our product can make your school management easier</Text>
				<Button 
					fontSize={'14px'} 
					w={['141px','230px']} 
					h={['50px','60px']} 
					bgColor={'#FFE931'} 
					color={'darkGreen'} 
					variant={'secondary'} as={RLink}
					to={'https://calendar.google.com/calendar/embed?src=crestdot%40gmail.com&ctz=Africa%2FLagos '}>Schedule a call</Button>
			</Stack>
			<Divider  border={'1px solid #525252'} />
			<Stack direction={['column-reverse', 'row']} spacing={'20px'} alignItems={'center'} mt={['20px','10px']} mb={'50px'} justify={'space-between'}>
				<Text color={'brown.100'} fontSize={['12px','16px']}>©2023. Crestdot SMAS All rights reserved</Text>
				<HStack>
					{
						socialIcons.map((icon) => {
							return(
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
						})
					};
				</HStack>
			</Stack>
		</Stack>
	);
};