import React, { FC } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { Button } from './PrevNextArrow.styled';
import { useWindowSize } from '../../hooks/useWindowSize';

export interface IProps {
    direction: 'prev' | 'next';
    onClick?: () => void;
}

const PrevNextArrow: FC<IProps> = ({ direction, onClick }) => {
    const { width } = useWindowSize();

    return (
        <Button onClick={onClick} direction={direction}>
            {direction === 'prev' ? (
                <SlArrowLeft size={width > 767 ? 50 : 30} />
            ) : (
                <SlArrowRight size={width > 767 ? 50 : 30} />
            )}
        </Button>
    );
};

export default PrevNextArrow;
