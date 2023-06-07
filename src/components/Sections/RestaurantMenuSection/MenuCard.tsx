import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface IMenuCard {
    name: string;
    imgSource: string;
    description: string;
    weight: string | null | number;
    price: string | number;
    quantity: string | null | number;
    // TODO remove undefined
    measurementSystem: string | null | undefined;
}
const MenuCard: FC<IMenuCard> = ({
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
        <div>
            <h3>{itemName}</h3>
            <img src={imgSource} alt={itemName} />
            <p>{t(description)}</p>
            <p>{price}</p>
            {weight ? <p>{weight}</p> : null}
            {quantity ? <p>{quantity}</p> : null}
        </div>
    );
};

export default MenuCard;
