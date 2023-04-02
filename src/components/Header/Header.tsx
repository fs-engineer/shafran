import React, { FC } from 'react';
import { HeaderStyled } from './Header.styled';

import { Logo } from '../Logo';
import { NavBar } from '../NavBar';
import { Container } from '../../common';
import { useWindowSize } from '../../hooks/useWindowSize';
import { ContactDetails } from '../ContactDetails';

const Header: FC = () => {
    const { width } = useWindowSize();
    const isShowNav = width > 768;

    return (
        <HeaderStyled>
            <Container>
                <Logo />
                {isShowNav ? <NavBar /> : null!}
                <ContactDetails />
            </Container>
        </HeaderStyled>
    );
};

export default Header;
