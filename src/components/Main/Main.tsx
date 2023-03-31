import React, { FC } from 'react';
import { ChildrenProp } from '../../types';
import { MainStyled } from './Main.styled';

const Main: FC<ChildrenProp> = ({ children }) => {
    return (
        <MainStyled>
            <h2>Main</h2>
            {children}
        </MainStyled>
    );
};

export default Main;
