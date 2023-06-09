import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
    BoldText,
    Description,
    ImgWrapper,
    MenuItem,
    PriceWeightBlock,
    Title,
} from './FoodCard.styled';
import { Text } from '../../../../common';

interface IMenuCard {
    name: string;
    imgSource: string;
    description: string;
    weight: null | number;
    price: string | number;
    quantity: null | number;
    measurementSystem: string | null;
}
const FoodCard: FC<IMenuCard> = ({
    name,
    imgSource,
    description,
    weight,
    price,
    quantity,
    measurementSystem,
}) => {
    const { t } = useTranslation();
    const itemName = t(name);

    return (
        <MenuItem>
            <ImgWrapper>
                <img src={imgSource} alt={itemName} width={320} />
            </ImgWrapper>
            <Title>{itemName}</Title>
            <Description>{t(description)}</Description>
            <PriceWeightBlock>
                <Text>
                    {t('foodCard.price')}: <BoldText>{price}</BoldText>
                </Text>
                {weight ? (
                    <Text>
                        {t('foodCard.weight')}: {weight}
                    </Text>
                ) : null}
                {quantity ? (
                    <Text>
                        {t('foodCard.quantity')}: {quantity}
                    </Text>
                ) : null}
            </PriceWeightBlock>
        </MenuItem>
    );
};

export default FoodCard;
