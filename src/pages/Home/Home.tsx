import { FC } from 'react';
import { Main } from '../../components/Main';
import { Hero } from '../../components/Hero';
import { PresentationSection } from '../../components/Sections/PresentationSection';

const Home: FC = () => {
    return (
        <Main>
            <Hero />
            <PresentationSection />
        </Main>
    );
};

export default Home;
