import React, { FC } from 'react';
import { Header } from '../Header';
import { LayoutStyled } from './Layout.styled';
import { NavBar } from '../NavBar';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';

const Layout: FC = () => {
    return (
        <LayoutStyled>
            <Header>
                <NavBar />
            </Header>
            <Outlet />
            <Footer />
        </LayoutStyled>
    );
};

export default Layout;
