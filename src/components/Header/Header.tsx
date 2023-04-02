import React, { FC } from 'react';
import { HeaderStyled, SocialItem, SocialList } from './Header.styled';
import { useTranslation } from 'react-i18next';
import { BsPhone, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';

import { LangSwitcher } from '../LangSwitcher';
import { Logo } from '../Logo';
import { NavBar } from '../NavBar';
import { SocialIcon } from '../SocialIcon';
import { Container } from '../../common';
import { useWindowSize } from '../../hooks/useWindowSize';
import { Tooltip } from '../Tooltip';

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
    {
        name: 'map',
        icon: <IoLocationOutline />,
        link: 'https://goo.gl/maps/NRGaWpnmpgsfoNw8A',
    },
];

const Header: FC = () => {
    const { width } = useWindowSize();
    const isShowNav = width > 768;
    const { t } = useTranslation();

    return (
        <HeaderStyled>
            <Container>
                <Logo />
                {isShowNav ? <NavBar /> : null!}
                <SocialList>
                    {socialIcons.map(({ name, icon, link }) => (
                        <SocialItem key={name}>
                            <Tooltip text={name}>
                                <SocialIcon
                                    key={name}
                                    name={name}
                                    icon={icon}
                                    link={link}
                                />
                            </Tooltip>
                        </SocialItem>
                    ))}
                    <SocialItem>
                        <Tooltip text={t('lang')}>
                            <LangSwitcher />
                        </Tooltip>
                    </SocialItem>
                </SocialList>
            </Container>
        </HeaderStyled>
    );
};

export default Header;
