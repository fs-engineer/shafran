import React, { FC } from 'react';
import { HeaderStyled } from './Header.styled';

import { Logo } from '../../common/Logo';
import { NavBar } from '../NavBar';
import { Container } from '../../common';
import { useWindowSize } from '../../hooks/useWindowSize';
import { ContactDetails } from '../ContactDetails';
import { LogoWrapper } from '../../common/Logo/Logo.styled';
import { FlexMediaWrapper } from '../../common/FlexMediaWrapper';

const Header: FC = () => {
    const { width } = useWindowSize();
    const isShowNav = width > 768;

    return (
        <HeaderStyled>
            <Container>
                <FlexMediaWrapper>
                    <LogoWrapper>
                        <Logo />
                    </LogoWrapper>
                    {isShowNav ? <NavBar /> : null!}
                    <ContactDetails />
                </FlexMediaWrapper>
            </Container>
        </HeaderStyled>
    );
};

export default Header;
