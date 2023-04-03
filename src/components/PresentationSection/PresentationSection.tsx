import React, { FC } from 'react';
import { Container, Text } from '../../common';
import {
    DecoratedSection,
    Description,
    Title,
    AccentName,
    SliderWrapper,
    Image,
} from './PresentationSection.styled';
import { useTranslation } from 'react-i18next';
import SlickSlider from 'react-slick';

import bar from '../../assets/images/history/bar_1920.jpg';
import bistro from '../../assets/images/history/bistro_1920.jpg';
import breakfast from '../../assets/images/history/breakfast_1920.jpg';
import service from '../../assets/images/history/service_1920.jpg';
import vintage from '../../assets/images/history/vintage_1920.jpg';
import woman from '../../assets/images/history/woman_1920.jpg';
import NextArrow from './NextArrow/NextArrow';
import PrevArrow from './PrevArrow/PrevArrow';

interface IPresentationProps {
    description: string;
    title: string;
}

const sliderData = [
    { name: 'bar', src: bar },
    { name: 'bistro', src: bistro },
    { name: 'breakfast', src: breakfast },
    { name: 'service', src: service },
    { name: 'vintage', src: vintage },
    { name: 'woman', src: woman },
];
const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

const PresentationSection: FC<IPresentationProps> = ({
    description,
    title,
}) => {
    const { t } = useTranslation();

    return (
        <DecoratedSection>
            <Container padding={'100px 20px 100px 20px'}>
                <Description>
                    <Title>{t(title)}</Title>
                    <Text fontStyle={'italic'} size={1.5}>
                        <AccentName>Шафран</AccentName>
                        {t(description)}
                    </Text>
                </Description>

                <SliderWrapper>
                    <SlickSlider {...sliderSettings}>
                        {sliderData.map(({ src, name }) => (
                            <div key={name}>
                                <Image src={src} alt={name} />
                            </div>
                        ))}
                    </SlickSlider>
                </SliderWrapper>
            </Container>
        </DecoratedSection>
    );
};

export default PresentationSection;
