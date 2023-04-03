import React, { FC } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { Button } from './PrevNextArrow.styled';

export interface IProps {
    direction: 'prev' | 'next';
    onClick?: () => void;
}

const PrevNextArrow: FC<IProps> = ({ direction, onClick }) => {
    return (
        <Button onClick={onClick} direction={direction}>
            {direction === 'prev' ? (
                <SlArrowLeft size={50} />
            ) : (
                <SlArrowRight size={50} />
            )}
        </Button>
    );
};

export default PrevNextArrow;
