import React, { useState } from 'react';
import { Container, Section } from '../../../common';
import { devSize } from '../../../assets/devices';
import { useWindowSize } from '../../../hooks/useWindowSize';

import restaurantMenu from '../../../assets/menu.json';
import MenuCard from './MenuCard';

const RestaurantMenuSection = () => {
    const [menu, setMenu] = useState(restaurantMenu);

    const { width } = useWindowSize();
    const padding =
        width < devSize.tablet
            ? '50px 20px 50px 20px'
            : '100px 20px 100px 20px';

    console.log(menu);

    return (
        <Section>
            <Container padding={padding}>
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
                        <MenuCard
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
            </Container>
        </Section>
    );
};

export default RestaurantMenuSection;
