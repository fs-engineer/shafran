import React from 'react';
import {
    List,
    ListItem,
    MediaWrapper,
    Section,
} from './PromotionSection.styled';
import { Container, Text } from '../../../common';
import pizza from '../../../assets/images/promotion/pizza_1920.jpg';
import bowl from '../../../assets/images/promotion/bowl_1920.jpg';
import curry from '../../../assets/images/promotion/curry_1920.jpg';
import { useTranslation } from 'react-i18next';
import { useWindowSize } from '../../../hooks/useWindowSize';

const images = [
    { src: pizza, name: 'pizza' },
    { src: bowl, name: 'bowl' },
    { src: curry, name: 'curry' },
];

const PromotionSection = () => {
    const { t } = useTranslation();
    const { width } = useWindowSize();

    return (
        <Section>
            <Container padding={'50px 20px 50px 20px'}>
                <MediaWrapper>
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
                </MediaWrapper>
            </Container>
        </Section>
    );
};

export default PromotionSection;
