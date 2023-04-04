import React from 'react';
import { DecorationImg, List, ListItem } from './PromotionSection.styled';
import { Container, Text } from '../../../common';
import pizza from '../../../assets/images/promotion/pizza_1920.jpg';
import bowl from '../../../assets/images/promotion/bowl_1920.jpg';
import curry from '../../../assets/images/promotion/curry_1920.jpg';
import { useTranslation } from 'react-i18next';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { Section } from '../Section';
import { devSize } from '../../../assets/devices';
import source from '../../../assets/images/decorations/sauce_1920.png';
import food from '../../../assets/images/decorations/food_1920.png';

const images = [
    { src: pizza, name: 'pizza' },
    { src: bowl, name: 'bowl' },
    { src: curry, name: 'curry' },
];

const PromotionSection = () => {
    const { t } = useTranslation();
    const { width } = useWindowSize();
    const padding =
        width < devSize.tablet
            ? '50px 20px 50px 20px'
            : '100px 20px 100px 20px';

    return (
        <Section>
            <Container padding={padding}>
                <Text
                    fontStyle={'italic'}
                    size={width > 767 ? 1.5 : 1}
                    align={'center'}
                >
                    {t('sections.promotion')}
                </Text>

                <List>
                    {images.map(({ src, name }) => (
                        <ListItem key={name}>
                            <img src={src} alt={name} />
                        </ListItem>
                    ))}
                </List>

                <DecorationImg src={food} align={'right'} />
                <DecorationImg src={source} align={'left'} />
            </Container>
        </Section>
    );
};

export default PromotionSection;
