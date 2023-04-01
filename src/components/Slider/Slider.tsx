import React, { FC } from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlideBox, Title, Wrapper } from './Slider.styled';
import { useTranslation } from 'react-i18next';

interface IContent {
    text: string;
    src: string;
}

interface ISettings {
    dots: boolean;
    infinite: boolean;
    speed: number;
    fade: boolean;
    slidesToShow: number;
    slidesToScroll: number;
    autoplay: boolean;
    autoplaySpeed: number;
}
interface IProps {
    content: Array<IContent>;
    settings: ISettings;
}

const Slider: FC<IProps> = ({ content, settings }) => {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <SlickSlider {...settings}>
                {content.map(({ text, src }) => (
                    <SlideBox>
                        <img src={src} alt="hero" />
                        <Title>{t(`hero.${text}`)}</Title>
                    </SlideBox>
                ))}
            </SlickSlider>
        </Wrapper>
    );
};

export default Slider;
