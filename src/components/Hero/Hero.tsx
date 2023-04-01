import React from 'react';
import { Wrapper } from './Hero.styled';
import { Slider } from '../Slider';
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
    autoplaySpeed: 2000,
};

const Hero = () => {
    return (
        <Wrapper>
            <Slider content={sliderData} settings={sliderSettings} />
        </Wrapper>
    );
};

export default Hero;
