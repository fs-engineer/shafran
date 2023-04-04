import React from 'react';
import { Section } from '../Section';
import { Container } from '../../../common';
import { List, ListItem, MediaWrapper } from './OurMenuSection.styled';
import { Description } from '../Description';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { devSize } from '../../../assets/devices';
import { ourMenuGalleryData } from '../../../assets/imagesData';

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
                        {ourMenuGalleryData.map(({ src, name }) => (
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
