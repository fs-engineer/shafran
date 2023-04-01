import React from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import { SlideBox, SliderTitle, Wrapper } from './Hero.styled';
import barbecueImg from '../../assets/images/hero/barbecue_1920.jpg';
import cateringImg from '../../assets/images/hero/catering_1920.jpg';
import platterImg from '../../assets/images/hero/platter_1920.jpg';
import redWineImg from '../../assets/images/hero/red-wine_1920.jpg';

const sliderData = [
    { text: 'barbeque', src: barbecueImg },
    { text: 'banquet', src: cateringImg },
    { text: 'dishes', src: platterImg },
    { text: 'bar', src: redWineImg },
];

const sliderSettings = {
    dots: true,
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
        <Wrapper>
            <SlickSlider {...sliderSettings}>
                {sliderData.map(({ text, src }) => (
                    <SlideBox>
                        <img src={src} alt="hero" />
                        <SliderTitle>{t(`hero.${text}`)}</SliderTitle>
                    </SlideBox>
                ))}
            </SlickSlider>
        </Wrapper>
    );
};

export default Hero;
