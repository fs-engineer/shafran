import React from 'react';
import { Menu, NavBarStyled } from './NavBar.styled';
import { useTranslation } from 'react-i18next';

const menu = [{ name: '' }];

type LangType = {
    nativeName: string;
};

type Lang = {
    en: LangType;
    ua: LangType;
    ru: LangType;
};

const languages: any = {
    en: { nativeName: 'English' },
    ua: { nativeName: 'Ukrainian' },
    ru: { nativeName: 'Russian' },
};

const NavBar = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };
    // console.log('update');

    return (
        <NavBarStyled>
            <h2>NavBar</h2>
            <h3>{t('menu.home')}</h3>
            {Object.keys(languages).map(lng => (
                <button
                    type="submit"
                    key={lng}
                    onClick={() => i18n.changeLanguage(lng)}
                    disabled={i18n.resolvedLanguage === lng}
                >
                    {languages[lng].nativeName}
                </button>
            ))}
            <Menu></Menu>
        </NavBarStyled>
    );
};

export default NavBar;
