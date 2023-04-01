import React from 'react';
import { Menu, MenuItem, MenuLink, NavStyled } from './NavBar.styled';
import { useTranslation } from 'react-i18next';

interface IMenu {
    name: string;
    path: string;
}

const menu: Array<IMenu> = [
    { name: 'menu.home', path: '/' },
    { name: 'menu.menu', path: 'menu' },
    { name: 'menu.about', path: 'about' },
];

const NavBar = () => {
    const { t } = useTranslation();

    return (
        <NavStyled>
            <Menu>
                {menu.map(({ name, path }) => (
                    <MenuItem key={name}>
                        <MenuLink to={path}>{t(`${name}`)}</MenuLink>
                    </MenuItem>
                ))}
            </Menu>
        </NavStyled>
    );
};

export default NavBar;
