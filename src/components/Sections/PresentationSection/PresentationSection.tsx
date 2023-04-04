import React, { FC } from 'react';
import { Container } from '../../../common';
import {
    SliderWrapper,
    Image,
    MediaWrapper,
} from './PresentationSection.styled';
import SlickSlider from 'react-slick';

import bar from '../../../assets/images/history/bar_1920.jpg';
import bistro from '../../../assets/images/history/bistro_1920.jpg';
import breakfast from '../../../assets/images/history/breakfast_1920.jpg';
import service from '../../../assets/images/history/service_1920.jpg';
import vintage from '../../../assets/images/history/vintage_1920.jpg';
import woman from '../../../assets/images/history/woman_1920.jpg';
import NextArrow from './NextArrow/NextArrow';
import PrevArrow from './PrevArrow/PrevArrow';
import { Description } from '../Description';
import { Section } from '../Section';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { devSize } from '../../../assets/devices';

const sliderData = [
    { name: 'bar', src: bar },
    { name: 'bistro', src: bistro },
    { name: 'breakfast', src: breakfast },
    { name: 'service', src: service },
    { name: 'vintage', src: vintage },
    { name: 'woman', src: woman },
];
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
                                {sliderData.map(({ src, name }) => (
                                    <div key={name}>
                                        <Image src={src} alt={name} />
                                    </div>
                                ))}
                            </SlickSlider>
                        ) : null}

                        {/* for laptop and higher */}
                        {!tabletSize ? (
                            <SlickSlider {...sliderSettings}>
                                {sliderData.map(({ src, name }) => (
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
