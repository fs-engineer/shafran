import React, { FC } from 'react';
import { Header } from '../Header';
import { LayoutStyled } from './Layout.styled';
import { NavBar } from '../NavBar';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';

const Layout: FC = () => {
    return (
        <LayoutStyled>
            <h2>Layout</h2>
            <Header>
                <NavBar />
                <h2>Header</h2>
            </Header>
            <Outlet />
            <Footer />
        </LayoutStyled>
    );
};

export default Layout;
