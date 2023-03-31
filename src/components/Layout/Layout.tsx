import React, { FC } from 'react';
import { Header } from '../Header';
import { LayoutStyled } from './Layout.styled';
import { NavBar } from '../NavBar';

const Layout: FC = () => {
    return (
        <LayoutStyled>
            <h2>Layout</h2>
            <Header>
                <NavBar />
                <h2>Header</h2>
            </Header>
        </LayoutStyled>
    );
};

export default Layout;
