import React from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import { SlideBox, SliderTitle } from './Hero.styled';
import { Section } from '../../common';
import { heroSliderData } from '../../assets/imagesData';

const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};

const Hero = () => {
    const { t } = useTranslation();

    return (
        <Section>
            <SlickSlider {...sliderSettings}>
                {heroSliderData.map(({ name, src }) => (
                    <SlideBox key={name}>
                        <img src={src} alt={name} />
                        <SliderTitle>{t(`hero.${name}`)}</SliderTitle>
                    </SlideBox>
                ))}
            </SlickSlider>
        </Section>
    );
};

export default Hero;
