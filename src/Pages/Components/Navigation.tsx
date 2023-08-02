import { Button, Flex, Image } from '@chakra-ui/react';
import Cresdot from '../../Assets/svg/Crestdot.svg';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../Routes/AppRoutes';

interface INavigationProps{
	path?: string
	onOpen: () => void;
	pathName?: string;
}

export const Navigation = ({onOpen, pathName, path}:INavigationProps) => {
	const navigate = useNavigate();

	const _handleClick = (path?:string) => {
		if(path){
			navigate(path);
		}else{
			onOpen();
		}
		
	};
	return(
		<Flex mt={'40px'} w={'full'} alignItems={'center'} justifyContent={'space-between'}>
			<Image cursor={'pointer'} onClick={() => navigate(AppRoutes.home)} w={['112px','165px']} h={['24px','35px']} src={Cresdot}></Image>
			<Flex alignItems={'center'} justifyContent={'center'} border={'0.5px solid rgba(120, 82, 38, 0.50)'} borderRadius={'50px'} w={['99px','129px']} h={['48px','60px']}>
				<Button 
					variant={'primary'}
					w={['95px','119px']} 
					h={['40px','50px']}
					fontSize={'14px'}
					onClick={() => _handleClick(path)}
				>
					{pathName || 'Join waitlist'}
				</Button>
			</Flex>
		</Flex>
	);
};