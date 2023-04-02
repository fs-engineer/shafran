import React from 'react';
import { FooterStyled } from './Footer.styled';
import { Address } from '../Address';
import { ContactDetails } from '../ContactDetails';
import { Logo } from '../Logo';

const Footer = () => {
    return (
        <FooterStyled>
            <Logo />
            <ContactDetails />
            {/*<GoogleMap />*/}
            <Address />
        </FooterStyled>
    );
};

export default Footer;
