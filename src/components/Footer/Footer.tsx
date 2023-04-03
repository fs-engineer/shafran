import React from 'react';
import { FooterStyled, List, ListItem } from './Footer.styled';
import { Address } from '../Address';
import { ContactDetails } from '../ContactDetails';
import { Logo } from '../../common/Logo';
import { Container } from '../../common';
import { FlexMediaWrapper } from '../../common/FlexMediaWrapper';

const footerList = [<Logo />, <ContactDetails />, <Address />];

const Footer = () => {
    return (
        <FooterStyled>
            <Container>
                <FlexMediaWrapper>
                    <List>
                        {footerList.map((el, idx) => (
                            <ListItem key={idx}>{el}</ListItem>
                        ))}
                    </List>
                </FlexMediaWrapper>
            </Container>
        </FooterStyled>
    );
};

export default Footer;
