import { FC } from 'react';
import { Main } from '../../components/Main';
import { Hero } from '../../components/Hero';
import { PresentationSection } from '../../components/Sections/PresentationSection';

const Home: FC = () => {
    return (
        <Main>
            <Hero />
            <PresentationSection
                description="presentation.ourHistory"
                title="presentation.ourHistoryTitle"
            />
        </Main>
    );
};

export default Home;
