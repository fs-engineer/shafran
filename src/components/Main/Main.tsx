import React, { FC } from 'react';
import { ChildrenProp } from '../../types';
import { MainStyled } from './Main.styled';

const Main: FC<ChildrenProp> = () => {
    return (
        <MainStyled>
            <h2>Main</h2>
        </MainStyled>
    );
};

export default Main;
