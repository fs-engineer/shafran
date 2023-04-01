import React, { FC, useRef } from 'react';
import { Wrapper } from './Layout.styled';
import { Header } from '../Header';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';

const Layout: FC = () => {
    return (
        <Wrapper>
            <Header />
            <Outlet />
            <Footer />
        </Wrapper>
    );
};

export default Layout;
