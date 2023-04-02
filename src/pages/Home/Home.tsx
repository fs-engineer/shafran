import { FC } from 'react';
import { Main } from '../../components/Main';
import { Hero } from '../../components/Hero';
import { PresentationSection } from '../../components/PresentationSection';

const Home: FC = () => {
    return (
        <Main>
            <Hero />
            <PresentationSection
                description="presentation.ourHistory"
                title="Наша история"
            />
        </Main>
    );
};

export default Home;
