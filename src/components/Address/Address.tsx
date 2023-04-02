import React from 'react';
import { AddressStyled } from './Address.styled';
import { Text } from '../../common';
import { theme } from '../../assets/themes/theme';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useWindowSize } from '../../hooks/useWindowSize';
import { devSize } from '../../assets/devices';

const Address = () => {
    const { t } = useTranslation();
    const { width } = useWindowSize();
    const adaptiveTextSize =
        width < +devSize.mobilePro
            ? 0.7
            : width > +devSize.mobilePro && width < +devSize.tablet
            ? 0.8
            : 1;

    return (
        <AddressStyled>
            <NavLink to="https://goo.gl/maps/NRGaWpnmpgsfoNw8A" target="_blank">
                <Text color={theme.font.light} size={adaptiveTextSize}>
                    {t('address')}
                </Text>
            </NavLink>
        </AddressStyled>
    );
};

export default Address;
