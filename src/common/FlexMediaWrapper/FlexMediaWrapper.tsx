import React, { FC } from 'react';
import { Wrapper } from './FlexMediaWrapper.styled';
import { ChildrenProp } from '../../types';

const FlexMediaWrapper: FC<ChildrenProp> = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

export default FlexMediaWrapper;
