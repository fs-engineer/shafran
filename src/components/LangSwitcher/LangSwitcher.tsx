import React from 'react';
import { useTranslation } from 'react-i18next';

interface ILang {
    [key: string]: string;
}

const languages: ILang = {
    en: 'en',
    ua: 'ua',
    ru: 'ru',
};

const LangSwitcher = () => {
    const { i18n } = useTranslation();

    return (
        <>
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
        </>
    );
};

export default LangSwitcher;
