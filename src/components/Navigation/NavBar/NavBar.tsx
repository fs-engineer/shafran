import React, { FC } from 'react';
import { Menu, MenuItem, MenuLink, NavStyled } from './NavBar.styled';
import { useTranslation } from 'react-i18next';
import { menuListData } from '../../../assets/menuListData';

const NavBar: FC = () => {
    const { t } = useTranslation();

    return (
        <NavStyled>
            <Menu>
                {menuListData.map(({ name, path }) => (
                    <MenuItem key={name}>
                        <MenuLink to={path}>{t(`${name}`)}</MenuLink>
                    </MenuItem>
                ))}
            </Menu>
        </NavStyled>
    );
};

export default NavBar;
