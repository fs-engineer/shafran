import React, { FC } from 'react';
import { ChildrenProp } from '../../types';
import { HeaderStyled } from './Header.styled';

const Header: FC<ChildrenProp> = ({ children }) => {
    return <HeaderStyled>{children}</HeaderStyled>;
};

export default Header;
