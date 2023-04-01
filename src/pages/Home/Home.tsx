import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Main } from '../../components/Main';
import { Hero } from '../../components/Hero';
import { LangSwitcher } from '../../components/LangSwitcher';

const Home: FC = () => {
    const { t } = useTranslation();

    return (
        <Main>
            <Hero />
            <LangSwitcher />
        </Main>
    );
};

export default Home;
