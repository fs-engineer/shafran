import React, { FC } from 'react';
import { Container } from '../../../common';
import {
    SliderWrapper,
    Image,
    MediaWrapper,
} from './PresentationSection.styled';
import SlickSlider from 'react-slick';

import NextArrow from './NextArrow/NextArrow';
import PrevArrow from './PrevArrow/PrevArrow';
import { Description } from '../Description';
import { Section } from '../Section';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { devSize } from '../../../assets/devices';
import { presentationSliderData } from '../../../assets/imagesData';

const sliderMobSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
};
const sliderSettings = {
    ...sliderMobSettings,
    nextArrow: <PrevArrow />,
    prevArrow: <NextArrow />,
};

const PresentationSection: FC = () => {
    const { width } = useWindowSize();
    const padding =
        width < devSize.tablet
            ? '50px 20px 50px 20px'
            : '100px 20px 100px 20px';
    const tabletSize = width < devSize.laptop;

    return (
        <Section>
            <Container padding={padding}>
                <MediaWrapper>
                    <Description
                        description="sections.ourHistory"
                        title="sections.ourHistoryTitle"
                    />
                    <SliderWrapper>
                        {/* tablet and lower */}
                        {tabletSize ? (
                            <SlickSlider {...sliderMobSettings}>
                                {presentationSliderData.map(({ src, name }) => (
                                    <div key={name}>
                                        <Image src={src} alt={name} />
                                    </div>
                                ))}
                            </SlickSlider>
                        ) : null}

                        {/* for laptop and higher */}
                        {!tabletSize ? (
                            <SlickSlider {...sliderSettings}>
                                {presentationSliderData.map(({ src, name }) => (
                                    <div key={name}>
                                        <Image src={src} alt={name} />
                                    </div>
                                ))}
                            </SlickSlider>
                        ) : null}
                    </SliderWrapper>
                </MediaWrapper>
            </Container>
        </Section>
    );
};

export default PresentationSection;
