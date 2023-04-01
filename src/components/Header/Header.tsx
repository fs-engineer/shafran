import React, { FC } from 'react';
import { ChildrenProp } from '../../types';
import { HeaderStyled } from './Header.styled';
import { Logo } from '../Logo';
import { NavBar } from '../NavBar';
import { SocialIcon } from '../SocialIcon';
import { Container } from '../../common';

const Header: FC = () => {
    return (
        <HeaderStyled>
            <Container>
                <Logo />
                <NavBar />
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
