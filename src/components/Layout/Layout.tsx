import React, { FC } from 'react';
import { Header } from '../Header';
import { LayoutStyled } from './Layout.styled';
import { NavBar } from '../NavBar';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Logo } from '../Logo';
import { SocialIcon } from '../SocialIcon';

const Layout: FC = () => {
    return (
        <LayoutStyled>
            <Header>
                <Logo />
                <NavBar />
                <div style={{ display: 'flex' }}>
                    <SocialIcon />
                    <SocialIcon />
                    <SocialIcon />
                </div>
            </Header>
            <Outlet />
            <Footer />
        </LayoutStyled>
    );
};

export default Layout;
