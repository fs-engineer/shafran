import React from 'react';
import { Section } from '../Section';
import { Container } from '../../../common';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { devSize } from '../../../assets/devices';
import { useTranslation } from 'react-i18next';
import { TitleStyled } from './HistorySection.styled';
import { Paragraphs } from '../../../common/Paragraphs';

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
                <TitleStyled>{t('about.historyTitle')}</TitleStyled>
                <Paragraphs
                    quantity={5}
                    localPath={'about.history'}
                    marginBottom={30}
                />
            </Container>
        </Section>
    );
};

export default HistorySection;
