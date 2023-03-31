import React from 'react';
import { Logo, Menu, MenuItem, MenuLink, NavBarStyled } from './NavBar.styled';
import { useTranslation } from 'react-i18next';

interface IMenu {
    name: string;
    path: string;
}

const menu: Array<IMenu> = [
    { name: 'menu.home', path: '/' },
    { name: 'menu.menu', path: 'menu' },
    { name: 'menu.contacts', path: 'contacts' },
    { name: 'menu.about', path: 'about' },
];

const NavBar = () => {
    const { t } = useTranslation();

    return (
        <NavBarStyled>
            <Logo>Шафран</Logo>
            <Menu>
                {menu.map(({ name, path }) => (
                    <MenuItem key={name}>
                        <MenuLink to={path}>{t(`${name}`)}</MenuLink>
                    </MenuItem>
                ))}
            </Menu>
        </NavBarStyled>
    );
};

export default NavBar;
