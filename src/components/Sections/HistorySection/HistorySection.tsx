import React from 'react';
import { Section } from '../Section';
import { Container } from '../../../common';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { devSize } from '../../../assets/devices';
import { useTranslation } from 'react-i18next';
import { TitleStyled } from './HistorySection.styled';
import { Paragraphs } from '../../../common/Paragraphs';
import {
    ImageWrapper,
    MediaWrapper,
    SliderWrapper,
    TextWrapper,
} from '../AboutSection/AboutSection.styled';
import SlickSlider from 'react-slick';
import { aboutSliderData } from '../../../assets/imagesData';

const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    rows: 3,
    slidesPerRow: 1,
    fade: true,
};

const HistorySection = () => {
    const { width } = useWindowSize();
    const { t } = useTranslation();
    const padding =
        width < devSize.tablet
            ? '50px 20px 50px 20px'
            : '100px 20px 100px 20px';

    return (
        <Section>
            <Container padding={padding}>
                <MediaWrapper>
                    <SliderWrapper>
                        <SlickSlider {...sliderSettings}>
                            {[...aboutSliderData]
                                .reverse()
                                .map(({ src, name }) => (
                                    <ImageWrapper key={name}>
                                        <img src={src} alt={name} />
                                    </ImageWrapper>
                                ))}
                        </SlickSlider>
                    </SliderWrapper>
                    <TextWrapper>
                        <TitleStyled>{t('about.historyTitle')}</TitleStyled>
                        <Paragraphs
                            quantity={5}
                            localPath={'about.history'}
                            marginBottom={30}
                        />
                    </TextWrapper>
                </MediaWrapper>
            </Container>
        </Section>
    );
};

export default HistorySection;
