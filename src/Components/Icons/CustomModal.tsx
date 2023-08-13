import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalBody, chakra, Heading, FormLabel, Input, Select, Flex, Button, Image, InputGroup, InputLeftElement, Icon } from '@chakra-ui/react';
import rightArrow from '../../Assets/svg/rightArrow.svg';
import modalImage from '../../Assets/Images/modalImage.png';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineMail} from 'react-icons/ai';


interface ICustomModal {
    isOpen: boolean;
    onClose: () => void;
}
export const CustomModal = ({isOpen, onClose}:ICustomModal) => {
	return(
		<Modal isOpen={isOpen} onClose={onClose} size={['lg',null, 'xl','3xl']} isCentered >
			<ModalOverlay />
			<ModalContent right={['0', null, null, '150px']} h={'550px'} borderLeftRadius={'10px'}  bgColor={'#fff'} >
				{/* <ModalCloseButton /> */}
				<ModalBody pl={[null, '50px']}  w={'auto'}  display={'flex'} justifyContent={['center', null, null, 'flex-start']}  borderRadius={'none'} >
					
					<chakra.form className="launchlist-form" action="https://getlaunchlist.com/s/t2L2mc" method="POST">
						<Heading my={'40px'} fontSize={'28px'} color={'#000'}>Join the Cresdot Waitlist</Heading>
						<FormLabel color={'#000'}>Full Name</FormLabel>
						<InputGroup>
							<InputLeftElement pointerEvents='none'>
								<Icon as={AiOutlineUser} color={'#8B8B8B'} />
							</InputLeftElement>
							<Input
								name='name'
								type='text'
								w={['335px', 'full', 'full', '330px']}
								color={'#8B8B8B'}
								_placeholder={{ color: '#C4C4C4' }}
								placeholder='Full name'
								bgColor={'#F6F6F6'}
								mb={'30px'} />
						</InputGroup>
						<FormLabel color={'#000'}>Email address</FormLabel>
						<InputGroup>
							<InputLeftElement pointerEvents='none'>
								<Icon as={AiOutlineMail} color={'#8B8B8B'} />
							</InputLeftElement>
							<Input
								name='name'
								type='text'
								w={['335px', 'full', 'full', '330px']}
								color={'#8B8B8B'}
								_placeholder={{ color: '#C4C4C4' }}
								placeholder='Full name'
								bgColor={'#F6F6F6'}
								mb={'30px'} />
						</InputGroup>
						<FormLabel color={'#000'}>User Category</FormLabel>
						<Select name='category' mb={'30px'}  bgColor={'#F6F6F6'} color={'#8B8B8B'} _placeholder={{ color: '#C4C4C4' }} placeholder='Select category'>
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
					
					<Image display={['none', null, null,'flex']} pos={'relative'} bottom={'1.4%'} left={'23.5%'} src={modalImage} w={['550px']} h={'550px'} objectFit={'cover'} borderRightRadius={'10px'} />
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};