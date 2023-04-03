import React from 'react';
import { useTranslation } from 'react-i18next';
import { GoogleMap } from '../../components/GoogleMap';

const About = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h2>{t('menu.about')}</h2>
            <GoogleMap />
        </div>
    );
};

export default About;
