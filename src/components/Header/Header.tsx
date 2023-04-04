import React, { FC } from 'react';
import { ContactDetailsWrapper, HeaderStyled } from './Header.styled';

import { Logo } from '../../common/Logo';
import { NavBar } from '../Navigation/NavBar';
import { Container } from '../../common';
import { useWindowSize } from '../../hooks/useWindowSize';
import { ContactDetails } from '../ContactDetails';
import { LogoWrapper } from '../../common/Logo/Logo.styled';
import { FlexMediaWrapper } from '../../common/FlexMediaWrapper';
import { BurgerButton } from '../Navigation/BurgerButton';
import { devSize } from '../../assets/devices';

interface IProps {
    toggleBurgerMenu: () => void;
}
const Header: FC<IProps> = ({ toggleBurgerMenu }) => {
    const { width } = useWindowSize();
    const isShowNav = width > devSize.tablet;

    return (
        <HeaderStyled>
            <Container>
                <FlexMediaWrapper>
                    <LogoWrapper>
                        <Logo />
                    </LogoWrapper>
                    {isShowNav ? <NavBar /> : null!}
                    <ContactDetailsWrapper>
                        <ContactDetails />
                    </ContactDetailsWrapper>
                    {!isShowNav ? (
                        <BurgerButton onClick={toggleBurgerMenu} />
                    ) : (
                        null!
                    )}
                </FlexMediaWrapper>
            </Container>
        </HeaderStyled>
    );
};

export default Header;
