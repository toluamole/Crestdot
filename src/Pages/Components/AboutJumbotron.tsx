import { Heading, Stack, Text, Flex, Divider, HStack} from '@chakra-ui/react';
import React from 'react';
import { SlidingItemsContainer } from './SlidingItemsContainer';
import backgroundWithGlow from '../../Assets/Images/backgroundWithGlow.svg';

export const AboutJumbotron = () => {
	return(
		<Stack py={['62px','100px']}>
			<Stack  w={'full'} h={['450px','770px']}>
				<Text fontSize={['10px','14px']} color={'#124944'}>CREATED FOR YOUR EVERY SCHOOL MANAGEMENT NEEDS</Text>
				<Heading w={['335px', null, 'auto','937px']} fontSize={['32px','70px']} fontWeight={'bold'} color={'darkGreen'}>Organizing the Education Parts,One At a Time</Heading>
			</Stack>
			<Flex direction={['column', 'column']} justify={'center'} alignItems={'flex-start'}  m={'-130px'} w={'auto'}   h={'770px'} objectFit={'cover'}  bgImage={`url(${backgroundWithGlow})`}>
				<SlidingItemsContainer />
				<Flex direction={['column', null,null, null, 'row']} ml={['130px',null, null,0]}  position={'relative'} top={['-10%','-35%']} justify={'space-evenly'} alignItems={'flex-start'} w={'100%'}>
					<Stack mb={['35px',null, null,  null, 0]} spacing={'18px'} w={['335px','450px']} >
						<HStack>
							<Divider border={'2px solid #FFE931 '} color={'#FFE931'} h={['36px','53px']} orientation='vertical'/>
							<Text color={'#FFF'} fontSize={'28px'} fontWeight={500}>Our vision</Text>
						</HStack>
						<Text fontSize={'18px'} color={'#FFF'}>
                            To be the foremost management solution that empowers schools with innovative technology to enhance their operations and productivity.
						</Text>
					</Stack>
					<Stack spacing={'18px'} w={['335px','570px']}>
						<HStack>
							<Divider h={['36px','53px']} border={'2px solid #FFE931 '} color={'#FFE931'} orientation='vertical'/>
							<Text color={'#FFF'} fontSize={'28px'} fontWeight={500}>Our mission</Text>
						</HStack>
						<Text fontSize={'18px'} color={'#FFF'}>
                            To provide schools with a comprehensive and user-friendly management software system that streamlines administrative tasks, 
                            facilitates communication, supports student achievement, and enhances stakeholder relationships.
						</Text>
					</Stack>
				</Flex>
			</Flex>
		</Stack>
	);
};