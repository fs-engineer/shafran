import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Wrapper } from './FoodCard.styled';
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
        <Wrapper>
            <h3>{itemName}</h3>
            <img src={imgSource} alt={itemName} width={320} />
            <Text>{t(description)}</Text>
            <Text>{price}</Text>
            {weight ? <Text>{weight}</Text> : null}
            {quantity ? <Text>{quantity}</Text> : null}
        </Wrapper>
    );
};

export default FoodCard;
