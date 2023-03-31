import React from 'react';
import { Menu, MenuItem, MenuLink, NavBarStyled } from './NavBar.styled';
import { useTranslation } from 'react-i18next';

const menu = [
    { name: 'menu.home', path: '/' },
    { name: 'menu.contacts', path: 'contacts' },
    { name: 'menu.about', path: 'about' },
];

interface ILang {
    [key: string]: string;
}

const languages: ILang = {
    en: 'en',
    ua: 'ua',
    ru: 'ru',
};

const NavBar = () => {
    const { t, i18n } = useTranslation();

    return (
        <NavBarStyled>
            <h2>NavBar</h2>
            <p>{t('about')}</p>
            {Object.keys(languages).map(lng => (
                <button
                    type="submit"
                    key={lng}
                    onClick={() => i18n.changeLanguage(lng)}
                    disabled={i18n.resolvedLanguage === lng}
                >
                    {languages[lng]}
                </button>
            ))}
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
