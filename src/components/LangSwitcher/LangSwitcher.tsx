import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './LandSwitcher.styled';
import localStorageService from '../../utils/localStorageService';
import { language } from '../../constants';

const languages: string[] = ['ua', 'en'];

const LangSwitcher = () => {
    const [langIdx, setLangIdx] = useState(
        Number(localStorageService.get(language)),
    );
    const { i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(languages[langIdx]);
        localStorageService.set(language, langIdx);
    }, [langIdx, i18n]);

    const changeIdx = () => {
        if (langIdx < 1) {
            setLangIdx(prevState => prevState + 1);
            return;
        }

        setLangIdx(0);
    };

    return (
        <Button onClick={changeIdx}>
            {languages[langIdx] || languages[0]}
        </Button>
    );
};

export default LangSwitcher;
