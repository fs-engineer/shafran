import React from 'react';
import { useTranslation } from 'react-i18next';
import { RestaurantMenuSection } from '../../components/Sections/RestaurantMenuSection';

const Menu = () => {
    const { t } = useTranslation();

    return <RestaurantMenuSection />;
};

export default Menu;
