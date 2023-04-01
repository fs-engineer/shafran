import React, { FC } from 'react';
import { ChildrenProp } from '../../types';
import { MainStyled } from './Main.styled';

const Main: FC<ChildrenProp> = ({ children }) => {
    return <MainStyled>{children}</MainStyled>;
};

export default Main;
