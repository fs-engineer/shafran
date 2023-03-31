import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h2>{t('menu.about')}</h2>
        </div>
    );
};

export default About;