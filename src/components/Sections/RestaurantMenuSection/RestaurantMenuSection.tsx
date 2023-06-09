import React, { useState } from 'react';
import { Container, Section } from '../../../common';
import { devSize } from '../../../assets/devices';
import { useWindowSize } from '../../../hooks/useWindowSize';

import restaurantMenu from '../../../assets/reataurantMenu.json';
import { MenuList } from './RestaurantMenuSection.styled';
import { FoodCard } from './FoodCard';

const RestaurantMenuSection = () => {
    const [menu, setMenu] = useState(restaurantMenu);
    const { width } = useWindowSize();
    const padding =
        width < devSize.tablet
            ? '50px 20px 50px 20px'
            : '100px 20px 100px 20px';

    return (
        <Section>
            <Container padding={padding}>
                <MenuList>
                    {menu.map(
                        ({
                            name,
                            imgSource,
                            description,
                            weight,
                            price,
                            quantity,
                            measurementSystem,
                        }) => (
                            <FoodCard
                                key={name}
                                name={name}
                                imgSource={imgSource}
                                description={description}
                                weight={weight}
                                price={price}
                                quantity={quantity}
                                measurementSystem={measurementSystem}
                            />
                        ),
                    )}
                </MenuList>
            </Container>
        </Section>
    );
};

export default RestaurantMenuSection;
