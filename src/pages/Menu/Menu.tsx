import React from 'react';
import { useTranslation } from 'react-i18next';

const Menu = () => {
    const { t } = useTranslation();
    return (
        <div style={{ backgroundColor: 'bisque' }}>
            <h2>{t('menu.menu')}</h2>
        </div>
    );
};

export default Menu;
