import { Button, Flex, Image } from '@chakra-ui/react';
import Cresdot from '../../Assets/svg/Crestdot.svg';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../Routes/AppRoutes';

interface INavigationProps{
	pageName:string;
	path: string
}

export const Navigation = ({pageName, path}:INavigationProps) => {
	const navigate = useNavigate();
	return(
		<Flex mt={'40px'} w={'full'} alignItems={'center'} justifyContent={'space-between'}>
			<Image cursor={'pointer'} onClick={() => navigate(AppRoutes.home)} w={['112px','165px']} h={['24px','35px']} src={Cresdot}></Image>
			<Flex alignItems={'center'} justifyContent={'center'} border={'0.5px solid rgba(120, 82, 38, 0.50)'} borderRadius={'50px'} w={['99px','129px']} h={['48px','60px']}>
				<Button 
					variant={'primary'}
					w={['91px','119px']} 
					h={['40px','50px']} 
					onClick={() => navigate(path)}
				>
					{pageName}
				</Button>
			</Flex>
		</Flex>
	);
};