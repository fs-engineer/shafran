import React from 'react';
import { AddressStyled } from './Address.styled';
import { Text } from '../../common';
import { theme } from '../../assets/themes/theme';
import { useTranslation } from 'react-i18next';

const Address = () => {
    const { t } = useTranslation();
    return (
        <AddressStyled>
            <Text color={theme.font.light}>{t('address')}</Text>
        </AddressStyled>
    );
};

export default Address;
