import React, { FC, useState } from 'react';
import { Wrapper } from './Layout.styled';
import { Header } from '../Header';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { BurgerMenu } from '../Navigation/BurgerMenu';

const Layout: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleBurgerMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };
    return (
        <Wrapper>
            <Header toggleBurgerMenu={toggleBurgerMenu} />
            <Outlet />
            <Footer />
            <BurgerMenu isMenuOpen={isMenuOpen} closeMenu={toggleBurgerMenu} />
        </Wrapper>
    );
};

export default Layout;
