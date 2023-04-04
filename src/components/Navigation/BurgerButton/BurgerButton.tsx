import React, { FC } from 'react';
import { Lines, BurgerBtn } from './BurgerButton.styled';

interface IProps {
    onClick: () => void;
}
const BurgerButton: FC<IProps> = ({ onClick }) => {
    return (
        <BurgerBtn onClick={onClick}>
            <Lines />
        </BurgerBtn>
    );
};

export default BurgerButton;
