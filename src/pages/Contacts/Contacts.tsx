import React from 'react';
import { useTranslation } from 'react-i18next';

const Contacts = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h2>{t('menu.contacts')}</h2>
        </div>
    );
};

export default Contacts;
