import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '../../../common';
import { Section } from '../Section';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { devSize } from '../../../assets/devices';
import { TitleStyled } from './AboutSection.styled';
import { Paragraphs } from '../../../common/Paragraphs';

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
                <TitleStyled>{t('about.descriptionTitle')}</TitleStyled>
                <Paragraphs
                    quantity={5}
                    localPath={'about.description'}
                    marginBottom={30}
                />
            </Container>
        </Section>
    );
};

export default AboutSection;
