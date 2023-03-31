import React from 'react';
import { Menu, NavBarStyled } from './NavBar.styled';

const menu = [{ name: '' }];

const NavBar = () => {
    return (
        <NavBarStyled>
            <h2>NavBar</h2>
            <Menu></Menu>
        </NavBarStyled>
    );
};

export default NavBar;
