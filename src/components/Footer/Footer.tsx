import React from 'react';
import { FooterStyled, List, ListItem } from './Footer.styled';
import { Address } from '../Address';
import { ContactDetails } from '../ContactDetails';
import { Logo } from '../Logo';
import { Container } from '../../common';

const footerList = [<Logo />, <ContactDetails />, <Address />];

const Footer = () => {
    return (
        <FooterStyled>
            <Container>
                <List>
                    {footerList.map((el, idx) => (
                        <ListItem key={idx}>{el}</ListItem>
                    ))}
                </List>
            </Container>
        </FooterStyled>
    );
};

export default Footer;
