import React, { FC } from 'react';
import { Wrapper } from './NextArrow.styled';
import { PrevNextArrow } from '../../../common/PrevNextArrow';

interface IProps {
    onClick?: () => void;
}

const NextArrow: FC<IProps> = ({ onClick }) => {
    return (
        <Wrapper>
            <PrevNextArrow direction={'next'} onClick={onClick} />
        </Wrapper>
    );
};

export default NextArrow;
