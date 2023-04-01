import React, { FC } from 'react';
import { HeaderStyled } from './Header.styled';
import { Logo } from '../Logo';
import { NavBar } from '../NavBar';
import { SocialIcon } from '../SocialIcon';
import { Container } from '../../common';
import { useWindowSize } from '../../hooks/useWindowSize';

const Header: FC = () => {
    const { width } = useWindowSize();
    const isShowNav = width > 768;

    return (
        <HeaderStyled>
            <Container>
                <Logo />
                {isShowNav ? <NavBar /> : null!}
                <div style={{ display: 'flex' }}>
                    <SocialIcon />
                    <SocialIcon />
                    <SocialIcon />
                </div>
            </Container>
        </HeaderStyled>
    );
};

export default Header;
