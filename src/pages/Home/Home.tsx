import { FC } from 'react';
import { Main } from '../../components/Main';
import { Hero } from '../../components/Hero';
import { PresentationSection } from '../../components/Sections/PresentationSection';
import { PromotionSection } from '../../components/Sections/PromotionSection';

const Home: FC = () => {
    return (
        <Main>
            <Hero />
            <PresentationSection />
            <PromotionSection />
        </Main>
    );
};

export default Home;
