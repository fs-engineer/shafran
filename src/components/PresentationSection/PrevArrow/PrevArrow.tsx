import React, { FC } from 'react';
import { Wrapper } from './PrevArrow.styled';
import { PrevNextArrow } from '../../../common/PrevNextArrow';

interface IProps {
    onClick?: () => void;
}

const PrevArrow: FC<IProps> = ({ onClick }) => {
    return (
        <Wrapper>
            <PrevNextArrow direction={'prev'} onClick={onClick} />
        </Wrapper>
    );
};

export default PrevArrow;
