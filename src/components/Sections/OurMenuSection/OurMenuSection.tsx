import React from 'react';
import { Section } from '../Section';
import { Container } from '../../../common';
import { List, ListItem, MediaWrapper } from './OurMenuSection.styled';
import { Description } from '../Description';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { devSize } from '../../../assets/devices';
import meat from '../../../assets/images/ourMenu/meat_1920.jpg';
import pasta from '../../../assets/images/ourMenu/pasta_1920.jpg';
import pizza from '../../../assets/images/ourMenu/pizza_1920.jpg';
import asparagus from '../../../assets/images/ourMenu/asparagus_1920.jpg';

const images = [
    { src: meat, name: 'meat' },
    { src: pasta, name: 'pasta' },
    { src: pizza, name: 'pizza' },
    { src: asparagus, name: 'asparagus' },
];
const OurMenuSection = () => {
    const { width } = useWindowSize();
    const padding =
        width < devSize.tablet
            ? '50px 20px 50px 20px'
            : '100px 20px 100px 20px';
    return (
        <Section>
            <Container padding={padding}>
                <MediaWrapper>
                    <Description
                        description="sections.ourMenu"
                        title="sections.ourMenuTitle"
                    />
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

export default OurMenuSection;
