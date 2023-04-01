import React, { FC } from 'react';
import { HeaderStyled } from './Header.styled';
import { Logo } from '../Logo';
import { NavBar } from '../NavBar';
import { SocialIcon } from '../SocialIcon';
import { Container } from '../../common';
import { useWindowSize } from '../../hooks/useWindowSize';
import { BsPhone, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const socialIcons = [
    {
        name: 'instagram',
        icon: <BsInstagram />,
        link: 'https://www.instagram.com/shafran_zt/',
    },
    {
        name: 'facebook',
        icon: <FaFacebookF />,
        link: 'https://www.facebook.com/shafranzt/',
    },
    {
        name: 'phone',
        icon: <BsPhone />,
        link: 'tel:+380682894490',
    },
];

const Header: FC = () => {
    const { width } = useWindowSize();
    const isShowNav = width > 768;

    return (
        <HeaderStyled>
            <Container>
                <Logo />
                {isShowNav ? <NavBar /> : null!}
                <div style={{ display: 'flex' }}>
                    {socialIcons.map(({ name, icon, link }) => (
                        <SocialIcon
                            key={name}
                            name={name}
                            icon={icon}
                            link={link}
                        />
                    ))}
                </div>
            </Container>
        </HeaderStyled>
    );
};

export default Header;
