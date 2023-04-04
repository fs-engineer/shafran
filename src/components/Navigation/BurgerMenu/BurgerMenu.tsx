import React, { FC } from 'react';
import { CloseBtn, MenuItem, MenuList, MenuWrapper } from './BurgerMenu.styled';
import { ChildrenProp } from '../../../types';
import { IoCloseSharp } from 'react-icons/io5';
import { menuListData } from '../../../assets/menuListData';
import { MenuLink } from '../NavBar/NavBar.styled';
import { useTranslation } from 'react-i18next';

export interface IProps extends ChildrenProp {
    isMenuOpen: boolean;
    closeMenu: () => void;
}
const BurgerMenu: FC<IProps> = ({ isMenuOpen, closeMenu }) => {
    const { t } = useTranslation();

    return (
        <MenuWrapper isMenuOpen={isMenuOpen} onClick={closeMenu}>
            <MenuList>
                <MenuItem>
                    <CloseBtn onClick={closeMenu}>
                        <IoCloseSharp />
                    </CloseBtn>
                </MenuItem>
                {menuListData.map(({ name, path }) => (
                    <MenuItem key={name}>
                        <MenuLink to={path}>{t(name)}</MenuLink>
                    </MenuItem>
                ))}
            </MenuList>
        </MenuWrapper>
    );
};

export default BurgerMenu;
