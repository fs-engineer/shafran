import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './LandSwitcher.styled';

const languages: string[] = ['ua', 'en', 'ru'];

const LangSwitcher = () => {
    const [langIdx, setLangIdx] = useState(0);
    const { i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(languages[langIdx]);
    }, [langIdx, i18n]);

    const changeIdx = () => {
        if (langIdx < 2) {
            setLangIdx(prevState => prevState + 1);
            return;
        }

        setLangIdx(0);
    };

    return <Button onClick={changeIdx}>{languages[langIdx]}</Button>;
};

export default LangSwitcher;
