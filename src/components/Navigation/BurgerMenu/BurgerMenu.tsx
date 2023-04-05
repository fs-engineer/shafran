import React, { FC } from 'react';
import {
    BurgerLink,
    CloseBtn,
    ImageWrapper,
    MenuItem,
    MenuList,
    MenuWrapper,
} from './BurgerMenu.styled';
import { ChildrenProp } from '../../../types';
import { IoCloseSharp } from 'react-icons/io5';
import { menuListData } from '../../../assets/menuListData';
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
                {/*<MenuItem>*/}
                {/*    <CloseBtn onClick={closeMenu}>*/}
                {/*        <IoCloseSharp />*/}
                {/*    </CloseBtn>*/}
                {/*</MenuItem>*/}
                {menuListData.map(({ name, path, image }) => (
                    <MenuItem key={name}>
                        <BurgerLink to={path}>
                            <ImageWrapper>
                                <img
                                    src={image?.src}
                                    alt={image?.name}
                                    width={100}
                                />
                            </ImageWrapper>
                            {t(name)}
                        </BurgerLink>
                    </MenuItem>
                ))}
            </MenuList>
        </MenuWrapper>
    );
};

export default BurgerMenu;
