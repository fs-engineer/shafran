import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '../../../common';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { AccentName, DescriptionStyled, Title } from './Description.styled';

interface IDescriptionProps {
    description: string;
    title: string;
}

const Description: FC<IDescriptionProps> = ({ title, description }) => {
    const { t } = useTranslation();
    const { width } = useWindowSize();
    return (
        <DescriptionStyled>
            <Title>{t(title)}</Title>
            <Text fontStyle={'italic'} size={width > 767 ? 1.5 : 1}>
                <AccentName>Шафран</AccentName>
                {t(description)}
            </Text>
        </DescriptionStyled>
    );
};

export default Description;
