import * as React from 'react';
import {
	chakra,
	ImageProps,
	forwardRef,
} from '@chakra-ui/react';
import trust from '../../Assets/svg/trustIcon.svg';
import group from '../../Assets/svg/group.svg';
import flow from '../../Assets/svg/flow.svg';
import management from '../../Assets/svg/management.svg';
import energy from '../../Assets/svg/energy.svg';

export const TrustIcon = forwardRef<ImageProps, 'img'>((props, ref) => {
	return <chakra.img src={trust} ref={ref} {...props} />;
});

export const Collaboration = forwardRef<ImageProps, 'img'>((props, ref) => {
	return <chakra.img src={group} ref={ref} {...props} />;
});

export const Workflow = forwardRef<ImageProps, 'img'>((props, ref) => {
	return <chakra.img src={flow} ref={ref} {...props} />;
});

export const Innovation = forwardRef<ImageProps, 'img'>((props, ref) => {
	return <chakra.img src={management} ref={ref} {...props} />;
});

export const Energy = forwardRef<ImageProps, 'img'>((props, ref) => {
	return <chakra.img src={energy} ref={ref} {...props} />;
});