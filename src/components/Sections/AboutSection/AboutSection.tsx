import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '../../../common';
import { Section } from '../Section';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { devSize } from '../../../assets/devices';
import {
    AboutHeader,
    ImageWrapper,
    MediaWrapper,
    SliderWrapper,
    TextWrapper,
    TitleStyled,
} from './AboutSection.styled';
import { Paragraphs } from '../../../common/Paragraphs';
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
const AboutSection = () => {
    const { width } = useWindowSize();
    const { t } = useTranslation();
    const padding =
        width < devSize.tablet
            ? '50px 20px 50px 20px'
            : '100px 20px 100px 20px';

    return (
        <Section>
            <Container padding={padding}>
                <AboutHeader />
                <MediaWrapper>
                    <TextWrapper>
                        <TitleStyled>{t('about.descriptionTitle')}</TitleStyled>
                        <Paragraphs
                            quantity={5}
                            localPath={'about.description'}
                            marginBottom={30}
                        />
                    </TextWrapper>

                    <SliderWrapper>
                        <SlickSlider {...sliderSettings}>
                            {aboutSliderData.map(({ src, name }) => (
                                <ImageWrapper key={name}>
                                    <img src={src} alt={name} />
                                </ImageWrapper>
                            ))}
                        </SlickSlider>
                    </SliderWrapper>
                </MediaWrapper>
            </Container>
        </Section>
    );
};

export default AboutSection;
